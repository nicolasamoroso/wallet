import { ColumnDef } from "@tanstack/react-table"
import {
  ArrowUpDown,
  ClipboardCopy,
  DeleteIcon,
  FilePenIcon,
  MoreHorizontal,
  TagIcon,
} from "lucide-react"

import { Category } from "@/types/category-type"
import { Expense } from "@/types/expense-type"
import capitalizeFirstLetter from "@/hooks/capitalize-first-letter"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const columns: ColumnDef<Expense>[] = [
  {
    accessorKey: "date",
    header: "Fecha",
    cell: ({ row }) => {
      const date = new Date(row.getValue("date") as string)
      const formattedDay = new Intl.DateTimeFormat("es-AR", { day: "2-digit" }).format(
        date
      )
      const formattedMonth = new Intl.DateTimeFormat("es-AR", { month: "short" }).format(
        date
      )
      const capitalizedMonth = capitalizeFirstLetter(formattedMonth)

      return (
        <span>
          {formattedDay} {capitalizedMonth}
        </span>
      )
    },
  },
  {
    accessorKey: "name",
    header: "Nombre",
    cell: ({ row }) => {
      const name = row.getValue("name") as string

      return <span>{name}</span>
    },
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        // <Button
        //   variant="ghost"
        //   onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        //   className="px-0"
        // >
        <span className="font-semibold">Categoría</span>
        // <ArrowUpDown className="ml-2 h-4 w-4" />
        // </Button>
      )
    },
    cell: ({ row }) => {
      const category = row.getValue("category") as Category
      // bg-blue-200 text-blue-800
      // bg-green-200 text-green-800
      // bg-red-200 text-red-800
      return (
        <span
          className="px-2 py-1 rounded-md flex items-center gap-2 w-fit"
          style={{ color: category.textColor, backgroundColor: category.color }}
        >
          <TagIcon className="w-4 h-4" />
          {category.name}
        </span>
      )
    },
  },
  {
    accessorKey: "amount",
    header: "Cantidad",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <span className="font-medium">{formatted}</span>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-full p-0 hover:!bg-primary-foreground"
            >
              <span className="sr-only">Abrir menú</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => {
                const date = new Date(payment.date)
                navigator.clipboard.writeText(
                  `Categoría: ${payment.category}\nNombre: ${payment.name}\nDescripción: ${payment.description}\nFecha: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}\nCantidad: ${payment.amount}`
                )
              }}
              className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500"
            >
              <ClipboardCopy className="w-4 h-4" />
              <span className="text-sm font-medium">Copiar</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
              <FilePenIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Editar</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
              <DeleteIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Eliminar</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
