import { NextRequest, NextResponse } from "next/server"

import { Expense } from "@/types/expense-type"
import { expenses } from "@/app/api/expenses/expenses"

/* GET : /api/expenses/
 */
export async function GET() {
  return Response.json(expenses)
}

/* POST : /api/expenses/
  Content-Type: application/json
  Body: {
    "category": { "id": number, "name": string, "color": string, "textColor": string },
    "name": string,
    "description": string,
    "amount": number,
    "date": Date | string
  }
*/
export async function POST(req: NextRequest) {
  const expense: Expense = await req.json()

  expense.id = Math.random().toString(36).slice(2)
  expense.date = new Date(expense.date)

  expenses.push(expense)

  return NextResponse.json(expense)
}

/* PUT : /api/expenses/
  Content-Type: application/json
  Body: {
    "id": string,
    "category": { "id": number, "name": string, "color": string, "textColor": string },
    "name": string,
    "description": string,
    "amount": number,
    "date": Date | string
  }
*/
export async function PUT(req: NextRequest) {
  const expense: Expense = await req.json()

  const index = expenses.findIndex((p) => p.id === expense.id)

  if (index !== -1) {
    expenses[index] = expense
  }

  return NextResponse.json(expense)
}

/* DELETE : /api/expenses/
  Content-Type: application/json
  Body: {
    "id": string
  }
*/
export async function DELETE(req: NextRequest) {
  const { id } = await req.json()

  const index = expenses.findIndex((p) => p.id === id)

  if (index !== -1) {
    expenses.splice(index, 1)
  }

  return NextResponse.json({ id })
}

/* GET : /api/expenses/by-date?from=YYYY-MM-DD&to=YYYY-MM-DD
 */
export async function GETExpensesByDate(req: NextRequest) {
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

  const filteredExpenses = expenses.filter((p) => {
    return p.date >= fromDate && p.date <= toDate
  })

  return NextResponse.json(filteredExpenses)
}
