"use client"

import Expense from "@/types/expenseTypes"
// import { Container } from "@/components/AccountBalance/Container"
import EmojiPicker from "@/components/Emoji/EmojiPicker"
import ExpenseList from "@/components/Expense/ExpenseList"

export default function Home() {
  const expenseData = [
    {
      emoji: "🍗",
      name: "info",
      product: "Pollo",
      amount: 20,
      details: "asd",
      id: 1,
    },
    {
      emoji: "🥗",
      name: "info",
      product: "Ensalada",
      amount: 10,
      details: "asd",
      id: 2,
    },
    {
      emoji: "🏋️‍♂️",
      name: "info",
      product: "Gym",
      amount: 30,
      details: "asd",
      id: 3,
    },
    {
      emoji: "🚿",
      name: "info",
      product: "Agua",
      amount: 5,
      details: "asd",
      id: 4,
    },
  ] as Expense[]

  return (
    <div className="flex justify-center h-screen items-center">
      <div>
        {/* <Container /> */}
        <ExpenseList expenseData={expenseData} />
        <EmojiPicker />
      </div>
    </div>
  )
}
