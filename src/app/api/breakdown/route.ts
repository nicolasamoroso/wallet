import { NextRequest, NextResponse } from "next/server"

import { Breakdown } from "@/types/breakdown-type"
import { expenses } from "@/app/api/expenses/expenses"

/* GET : /api/breakdown?from=YYYY-MM-DD&to=YYYY-MM-DD
 */
export async function GET(req: NextRequest) {
  const from = req.nextUrl.searchParams.get("from")
  const to = req.nextUrl.searchParams.get("to")

  if (!from || !to) {
    return NextResponse.json(
      { error: "Missing 'from' or 'to' query parameter" },
      { status: 400 }
    )
  }

  const fromDate = new Date(from)
  const toDate = new Date(to)

  if (isNaN(fromDate.getTime()) || isNaN(toDate.getTime())) {
    return NextResponse.json(
      { error: "Invalid 'from' or 'to' query parameter" },
      { status: 400 }
    )
  }

  const breakdown: Breakdown[] = []

  expenses.forEach((expense) => {
    const expenseDate = new Date(expense.date)
    if (expenseDate >= fromDate && expenseDate <= toDate) {
      if (expense.category.id === undefined) {
        return NextResponse.json({ error: "Missing 'category' id" }, { status: 400 })
      }
      breakdown.push({
        name: expense.category.name,
        id: expense.category.id,
        amount: expense.amount,
      })
    }
  })

  return NextResponse.json(breakdown)
}
