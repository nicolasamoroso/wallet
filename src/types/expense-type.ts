import { Category } from "@/types/category-type"

interface Expense {
  id?: string
  category: Category
  name: string
  description: string
  amount: number
  date: Date
}

export type { Expense }
