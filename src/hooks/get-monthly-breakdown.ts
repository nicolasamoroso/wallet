import { Category } from "@/types/category-type"
import { Payment } from "@/types/expense-type"

const getMonthlyBreakdown = (data: Payment[]) => {
  return Object.values(
    data.reduce(
      (acc: { [key: string]: { name: string; amount: number; id: number } }, payment) => {
        const category = payment.category as Category
        const amount = payment.amount
        const id = category.id

        if (acc[id]) acc[id].amount += amount
        else acc[id] = { name: category.name, amount, id }

        return acc
      },
      {}
    )
  ).map(({ name, amount, id }) => ({ name, amount, id }))
}

export default getMonthlyBreakdown
