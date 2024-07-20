"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react"

import { Card } from "@/types/card-type"
import { Expense } from "@/types/expense-type"
import CalculateCurrentBalances from "@/hooks/calculate-current-balances"
import CalculateCurrentSpents from "@/hooks/calculate-current-spents"
import CanHaveChart from "@/hooks/can-have-chart"
import getMonthlyTotals from "@/hooks/get-monthly-totals"
import { DatePickerWithRange } from "@/components/balance/range-date-picker"
import BalanceCard from "./balance-card"

const Dashboard = ({
  budgets,
  accountId,
  payments,
}: {
  budgets: Card[]
  accountId: string
  payments: Expense[]
}) => {
  const [budgetsPerMonth, setBudgetsPerMonth] = useState<Card[]>([])
  const [spentsPerMonth, setSpentsPerMonth] = useState<Card[]>([])
  const [currentBalance, setCurrentBalance] = useState<Card[]>([])

  useEffect(() => {
    const calculatedSpents = CalculateCurrentSpents({ accountId, payments }) as Card[]
    const calculatedBudgetsPerMonth = getMonthlyTotals(budgets) as Card[]
    const calculatedSpentsPerMonth = getMonthlyTotals(calculatedSpents) as Card[]
    const calculatedCurrentBalance = CalculateCurrentBalances({
      budgets: calculatedBudgetsPerMonth,
      spents: calculatedSpentsPerMonth,
      accountId,
    }) as Card[]

    setBudgetsPerMonth(calculatedBudgetsPerMonth)
    setSpentsPerMonth(calculatedSpentsPerMonth)
    setCurrentBalance(calculatedCurrentBalance)
  }, [accountId, budgets, payments])

  const getLastAmount = (data: Card[]) =>
    data.length > 0 ? data[data.length - 1].amount : 0

  const [MonthBudget, setBudgets] = useState<number>(getLastAmount(budgetsPerMonth))
  const [MonthSpents, setMonthSpents] = useState<number>(getLastAmount(spentsPerMonth))
  const [MonthBalance, setMonthCurrentBalance] = useState<number>(
    getLastAmount(currentBalance)
  )

  useEffect(() => {
    setBudgets(getLastAmount(budgetsPerMonth))
    setMonthSpents(getLastAmount(spentsPerMonth))
    setMonthCurrentBalance(getLastAmount(currentBalance))
  }, [budgetsPerMonth, spentsPerMonth, currentBalance])

  const { percentage: budgetPercentage, chartData: budgetChartData } = CanHaveChart({
    data: budgetsPerMonth,
  })
  const { percentage: spentPercentage, chartData: spentChartData } = CanHaveChart({
    data: spentsPerMonth,
  })
  const { percentage: currentBalancePercentage, chartData: currentBalanceChartData } =
    CanHaveChart({ data: currentBalance })

  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 pb-3">
        <DatePickerWithRange className="col-span-1" />
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <BalanceCard
          title="Presupuesto"
          amount={MonthBudget}
          percentage={budgetPercentage}
          data={budgetChartData}
        />
        <BalanceCard
          title="Gastado"
          amount={MonthSpents}
          percentage={spentPercentage}
          data={spentChartData}
        />
        <BalanceCard
          title="Saldo actual"
          amount={MonthBalance}
          percentage={currentBalancePercentage}
          data={currentBalanceChartData}
        />
      </div>
    </div>
  )
}

export default Dashboard
