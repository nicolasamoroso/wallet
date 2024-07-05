import { Budget_CurrentBalance_Spent } from "@/app/page"

const getMonthlyTotals = (
  items: Budget_CurrentBalance_Spent[]
): Budget_CurrentBalance_Spent[] => {
  return items.reduce((acc, item) => {
    const month = new Date(item.date).getMonth()
    const year = new Date(item.date).getFullYear()

    const monthIndex = acc.findIndex((i) => {
      return (
        new Date(i.date).getMonth() === month && new Date(i.date).getFullYear() === year
      )
    })

    if (monthIndex === -1) {
      acc.push({
        id: item.id,
        amount: item.amount,
        accountId: item.accountId,
        date: new Date(item.date.getFullYear(), item.date.getMonth(), 1),
      })
    } else {
      acc[monthIndex].amount += item.amount
    }

    return acc
  }, [] as Budget_CurrentBalance_Spent[])
}

export default getMonthlyTotals
