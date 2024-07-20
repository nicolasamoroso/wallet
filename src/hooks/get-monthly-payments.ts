import { Payment } from "@/types/expense-type"

const getMonthlyPayments = ({ payments }: { payments: Payment[] }): Payment[] => {
  return payments.reduce((acc, item) => {
    const today = new Date()
    const last30Days = new Date(today)
    last30Days.setDate(today.getDate() - 30)

    const paymentDate = new Date(item.date)

    if (paymentDate >= last30Days) {
      acc.push({
        id: item.id,
        category: item.category,
        name: item.name,
        description: item.description,
        amount: item.amount,
        date: item.date,
      })
    }

    return acc
  }, [] as any[])
}

export default getMonthlyPayments
