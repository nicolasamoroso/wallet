import { Card } from "@/types/card-type"

const CalculateCurrentBalances = ({
  budgets,
  spents,
  accountId,
}: {
  budgets: Card[]
  spents: Card[]
  accountId: string
}) => {
  const spentMap = new Map()
  spents.forEach((spent) => {
    const key = `${spent.date.getMonth()}-${spent.date.getFullYear()}`
    if (spentMap.has(key)) {
      spentMap.set(key, spentMap.get(key) + spent.amount)
    } else {
      spentMap.set(key, spent.amount)
    }
  })

  const currentsBalance = budgets.map((budget) => {
    const key = `${budget.date.getMonth()}-${budget.date.getFullYear()}`
    const spentAmount = spentMap.get(key) || 0

    return {
      id: accountId + " " + Math.random(),
      amount: budget.amount - spentAmount,
      accountId: accountId,
      date: budget.date,
    }
  })

  return currentsBalance
}

export default CalculateCurrentBalances
