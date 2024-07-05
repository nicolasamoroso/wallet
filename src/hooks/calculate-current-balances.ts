import { Budget_CurrentBalance_Spent } from "@/app/page"

const CalculateCurrentBalances = ({
  budgets,
  spents,
  accountId,
}: {
  budgets: Budget_CurrentBalance_Spent[]
  spents: Budget_CurrentBalance_Spent[]
  accountId: string
}) => {
  // Crear un mapa para almacenar los gastos por mes y año
  const spentMap = new Map()
  spents.forEach((spent) => {
    const key = `${spent.date.getMonth()}-${spent.date.getFullYear()}`
    if (spentMap.has(key)) {
      // Si ya hay un gasto para este mes y año, sumarlo
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
