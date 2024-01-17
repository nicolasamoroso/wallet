"use client"

import Dashboard from "@/components/AccountBalance/dashboard"
import { columns, Payment } from "@/components/payments/columns"
import { PaymentTable } from "@/components/payments/payment-table"

export default function Home() {
  const data = [
    {
      id: "728ed52f",
      amount: 100,
      emoji: "🍕",
      category: "Food",
      description: "Pizza",
    },
    {
      id: "728ed52g",
      amount: 200,
      emoji: "🍔",
      category: "Food",
      description: "Burger",
    },
    {
      id: "728ed52h",
      amount: 300,
      emoji: "🍟",
      category: "Food",
      description: "Fries",
    },
    {
      id: "728ed52i",
      amount: 400,
      emoji: "🚿",
      category: "Utilities",
      description: "Water",
    },
    {
      id: "728ed52j",
      amount: 150,
      emoji: "🍦",
      category: "Food",
      description: "Ice Cream",
    },
    {
      id: "728ed52k",
      amount: 50,
      emoji: "🥤",
      category: "Food",
      description: "Soda",
    },
    {
      id: "728ed52l",
      amount: 250,
      emoji: "🍗",
      category: "Food",
      description: "Chicken",
    },
    {
      id: "728ed52m",
      amount: 120,
      emoji: "🍹",
      category: "Food",
      description: "Cocktail",
    },
    {
      id: "728ed52n",
      amount: 180,
      emoji: "🍝",
      category: "Food",
      description: "Pasta",
    },
    {
      id: "728ed52o",
      amount: 50,
      emoji: "💡",
      category: "Utilities",
      description: "Electricity",
    },
    {
      id: "728ed52p",
      amount: 30,
      emoji: "📱",
      category: "Utilities",
      description: "Phone Bill",
    },
    {
      id: "728ed52q",
      amount: 100,
      emoji: "📺",
      category: "Entertainment",
      description: "TV Subscription",
    },
    {
      id: "728ed52r",
      amount: 70,
      emoji: "📚",
      category: "Education",
      description: "Books",
    },
    {
      id: "728ed52s",
      amount: 90,
      emoji: "✈️",
      category: "Travel",
      description: "Flight Ticket",
    },
    {
      id: "728ed52t",
      amount: 80,
      emoji: "🍰",
      category: "Food",
      description: "Cake",
    },
    {
      id: "728ed52u",
      amount: 150,
      emoji: "🥩",
      category: "Food",
      description: "Steak",
    },
    {
      id: "728ed52v",
      amount: 25,
      emoji: "🍵",
      category: "Food",
      description: "Tea",
    },
    {
      id: "728ed52w",
      amount: 60,
      emoji: "🍣",
      category: "Food",
      description: "Sushi",
    },
    {
      id: "728ed52x",
      amount: 200,
      emoji: "🍷",
      category: "Food",
      description: "Wine",
    },
    {
      id: "728ed52y",
      amount: 50,
      emoji: "💻",
      category: "Utilities",
      description: "Internet Bill",
    },
    {
      id: "728ed52z",
      amount: 120,
      emoji: "🔌",
      category: "Utilities",
      description: "Power Adapter",
    },
    {
      id: "728ed530",
      amount: 80,
      emoji: "🎮",
      category: "Entertainment",
      description: "Video Game",
    },
    {
      id: "728ed531",
      amount: 40,
      emoji: "🎬",
      category: "Entertainment",
      description: "Movie Ticket",
    },
    {
      id: "728ed532",
      amount: 120,
      emoji: "📓",
      category: "Education",
      description: "Notebooks",
    },
  ] as Payment[]

  return (
    <div className="max-w-[1080px] mx-auto h-screen">
      <Dashboard />
      <PaymentTable columns={columns} data={data} />
    </div>
  )
}
