import { Category } from "@/types/category-type"

export type Expense = {
  id?: string
  category: Category
  name: string
  description: string
  amount: number
  date: Date
}
