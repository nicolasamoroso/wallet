import { Payment } from "@/types/paymentType"

const getMonthlyPayments = ({
  payments,
  month,
  year,
}: {
  payments: Payment[]
  month: number
  year: number
}): Payment[] => {
  return payments.reduce((acc, item) => {
    const itemMonth = new Date(item.date).getMonth()
    const itemYear = new Date(item.date).getFullYear()

    if (itemMonth === month && itemYear === year) {
      acc.push({
        id: item.id,
        emoji: item.emoji,
        category: item.category,
        name: item.name,
        description: item.description,
        amount: `${item.amount}`,
        date: item.date,
      })
    }

    return acc
  }, [] as any[])
}

export default getMonthlyPayments
