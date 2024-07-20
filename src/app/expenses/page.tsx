"use client"

import { useEffect, useState } from "react"

import { Breakdown } from "@/types/breakdown-type"
import { Category } from "@/types/category-type"
import { Expense } from "@/types/expense-type"
import { DatePickerWithRange } from "@/components/balance/range-date-picker"
import { columns } from "@/components/payments/columns"
import AddCategories from "@/app/expenses/components/add-categories"
import Balance from "@/app/expenses/components/balance"
import BreakdownTable from "@/app/expenses/components/breakdown"
import LinearChart from "@/app/expenses/components/linear-chart"
import PaymentTable from "@/app/expenses/components/table"
import { apiRequest, buildQueryUrl } from "@/utils/api"

export default function Page() {
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [breakdown, setBreakdown] = useState<Breakdown[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    apiRequest<Expense[]>("GET", "/api/expenses")
      .then((data) => setExpenses(data))
      .catch((err) => setError(err.message))

    apiRequest<Category[]>("GET", "/api/categories")
      .then((data) => setCategories(data))
      .catch((err) => setError(err.message))

    const today = new Date()
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(today.getDate() - 30)

    const formatDate = (date: Date) => date.toISOString().split("T")[0]

    const from = formatDate(thirtyDaysAgo)
    const to = formatDate(today)

    const url = buildQueryUrl("/api/breakdown", { from, to })

    apiRequest<Breakdown[]>("GET", url)
      .then((data) => setBreakdown(data))
      .catch((err) => setError(err.message))
  }, [])

  useEffect(() => {
    if (expenses.length > 0) {
      const today = new Date()
      const thirtyDaysAgo = new Date()
      thirtyDaysAgo.setDate(today.getDate() - 30)

      const formatDate = (date: Date) => date.toISOString().split("T")[0]

      const from = formatDate(thirtyDaysAgo)
      const to = formatDate(today)

      const url = buildQueryUrl("/api/breakdown", { from, to })

      apiRequest<Breakdown[]>("GET", url)
        .then((data) => setBreakdown(data))
        .catch((err) => setError(err.message))
    }
  }, [expenses])

  console.log(expenses)

  const addCategory = (newCategory: Category) => {
    setCategories((prevCategories) => [...prevCategories, newCategory])
    apiRequest<Category[]>("POST", "/api/categories", {
      body: JSON.stringify(newCategory),
    }).catch((err) => setError(err.message))
  }

  const addExpense = (newExpense: Expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense])
    apiRequest<Expense[]>("POST", "/api/expenses", {
      body: JSON.stringify(newExpense),
    }).catch((err) => setError(err.message))
  }

  return (
    <>
      <div className="xs:max-w-[590px] lg:max-w-[1080px] mx-auto flex flex-col gap-3">
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 lg:gap-x-3">
          <h1 className="text-3xl font-semibold col-span-2">Gastos</h1>
          <DatePickerWithRange className="col-span-1" />
        </div>
        {expenses && expenses.length > 0 ? (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 lg:gap-x-3">
            <div className="col-span-2 lg:col-span-1 flex flex-col grid-cols-2 lg:grid-cols-1 gap-3">
              <Balance data={breakdown} className="col-span-2" />
              <BreakdownTable data={breakdown} className="col-span-2" />
            </div>
            <LinearChart data={expenses} />
          </div>
        ) : (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 lg:gap-x-3">
            <Balance data={breakdown} className="col-span-2 lg:col-span-1" />
            <BreakdownTable data={breakdown} className="col-span-2 lg:col-span-2" />
          </div>
        )}
        <AddCategories categories={categories} addCategory={addCategory} />
        <div className="col-span-3 pt-10">
          <PaymentTable
            columns={columns}
            data={expenses}
            addExpense={addExpense}
            categories={categories}
          />
        </div>
      </div>
    </>
  )
}
