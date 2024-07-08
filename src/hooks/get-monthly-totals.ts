import { Card } from "@/types/card-type"

const getMonthlyTotals = (items: Card[]): Card[] => {
  return items.reduce((acc, item) => {
    const date = new Date(item.date)
    const month = date.getMonth()
    const year = date.getFullYear()

    const monthIndex = acc.findIndex((i) => {
      const iDate = new Date(i.date)
      return iDate.getMonth() === month && iDate.getFullYear() === year
    })

    if (monthIndex === -1) {
      acc.push({
        id: item.id,
        amount: item.amount,
        accountId: item.accountId,
        date: new Date(date.getFullYear(), date.getMonth(), 15),
      })
    } else {
      acc[monthIndex].amount += item.amount
    }

    return acc
  }, [] as Card[])
}

export default getMonthlyTotals
