"use client"

import { useEffect, useState } from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"

import { Payment } from "@/types/paymentType"
import getMonthlyPayments from "@/hooks/get-monthly-payments"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import AddPayment from "@/components/payments/add-payment"
import Menu from "./menu"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function PaymentTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [filter, setFilter] = useState("Category")
  const [payments, setPayments] = useState(data)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const monthlyPayments = getMonthlyPayments({
      payments: data as Payment[],
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    }) as TData[]

    console.log(monthlyPayments)
    console.log(new Date().getMonth())
    setPayments(monthlyPayments)
    setIsLoading(false)
  }, [data])

  const table = useReactTable({
    data: payments,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  })

  return (
    <>
      <div className="flex flex-col xs:flex-auto xs:grid xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 col-span-3">
        <div className="text-end col-span-2 lg:hidden">
          <AddPayment />
        </div>

        <Input
          placeholder={`Filtrar ${
            filter === "Category"
              ? "categorías..."
              : filter === "Name"
                ? "nombres..."
                : "cantidades..."
          }`}
          value={
            (table.getColumn(filter.toLowerCase())?.getFilterValue() as string) ?? ""
          }
          onChange={(event) => {
            return table
              .getColumn(filter.toLowerCase())
              ?.setFilterValue(event.target.value)
          }}
          className="bg-input-background col-span-2 xs:col-span-1"
        />
        <Menu setFilter={setFilter} filter={filter} />
        <div className="text-end hidden col-span-1 lg:block">
          <AddPayment />
        </div>
      </div>
      <div className="rounded-t-md border bg-secondary">
        {isLoading ? (
          <div className="flex justify-center items-center h-24">
            <span>Cargando...</span>
          </div>
        ) : (
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        className="text-primary font-semibold rounded-md"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="bg-primary-foreground">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="bg-primary-foreground h-24 w-full text-center"
                  >
                    No se encontraron gastos.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="bg-primary-foreground"
        >
          Anterior
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="bg-primary-foreground"
        >
          Siguiente
        </Button>
      </div>
    </>
  )
}
