import type { Meta, StoryObj } from "@storybook/react"

import Expense from "@/types/expense-types"
import ExpenseList from "./expense-list"

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

const meta = {
  title: "ExpenseList",
  component: ExpenseList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    expenseData: { control: "object" },
  },
} satisfies Meta<typeof ExpenseList>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    expenseData,
  },
}

export const Secondary: Story = {
  args: {
    expenseData: [expenseData[0]],
  },
}
