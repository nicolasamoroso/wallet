"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react"

import { Card } from "@/types/card-type"
import { Payment } from "@/types/payment-type"
import CalculateCurrentBalances from "@/hooks/calculate-current-balances"
import CalculateCurrentSpents from "@/hooks/calculate-current-spents"
import CanHaveChart from "@/hooks/can-have-chart"
import getMonthlyTotals from "@/hooks/get-monthly-totals"
import { DatePickerWithRange } from "@/components/balance/range-date-picker"
import BalanaceCard from "./balanace-card"

const Dashboard = ({
  budgets,
  accountId,
  payments,
  setData,
}: {
  budgets: Card[]
  accountId: string
  payments: Payment[]
  setData: Dispatch<SetStateAction<any[]>>
}) => {
  const [budgetsPerMonth, setBudgetsPerMonth] = useState<Card[]>([])
  const [spentsPerMonth, setSpentsPerMonth] = useState<Card[]>([])
  const [currentBalance, setCurrentBalance] = useState<Card[]>([])

  useEffect(() => {
    const calculatedSpents = CalculateCurrentSpents({
      accountId: accountId,
      payments: payments,
    }) as Card[]

    const calculatedBudgetsPerMonth = getMonthlyTotals(budgets) as Card[]
    setBudgetsPerMonth(calculatedBudgetsPerMonth)

    const calculatedSpentsPerMonth = getMonthlyTotals(calculatedSpents) as Card[]
    setSpentsPerMonth(calculatedSpentsPerMonth)

    const calculatedCurrentBalance = CalculateCurrentBalances({
      budgets: calculatedBudgetsPerMonth,
      spents: calculatedSpentsPerMonth,
      accountId: accountId,
    }) as Card[]
    setCurrentBalance(calculatedCurrentBalance)
  }, [accountId, budgets, payments, setData])

  const [MonthBudget, setBudgets] = useState<number>(
    budgetsPerMonth.length > 0 ? budgetsPerMonth[budgetsPerMonth.length - 1].amount : 0
  )
  const [MonthSpents, setMonthSpents] = useState<number>(
    spentsPerMonth.length > 0 ? spentsPerMonth[spentsPerMonth.length - 1].amount : 0
  )
  const [MonthBalance, setMonthCurrentBalance] = useState<number>(
    currentBalance.length > 0 ? currentBalance[currentBalance.length - 1].amount : 0
  )

  useEffect(() => {
    setBudgets(
      budgetsPerMonth.length > 0 ? budgetsPerMonth[budgetsPerMonth.length - 1].amount : 0
    )
    setMonthSpents(
      spentsPerMonth.length > 0 ? spentsPerMonth[spentsPerMonth.length - 1].amount : 0
    )
    setMonthCurrentBalance(
      currentBalance.length > 0 ? currentBalance[currentBalance.length - 1].amount : 0
    )
  }, [budgetsPerMonth, spentsPerMonth, currentBalance])

  const { percentage: budgetPercentage, chartData: budgetChartData } = CanHaveChart({
    data: budgetsPerMonth,
  })

  const { percentage: spentPercentage, chartData: spentChartData } = CanHaveChart({
    data: spentsPerMonth,
  })

  const { percentage: currentBalancePercentage, chartData: currentBalanceChartData } =
    CanHaveChart({
      data: currentBalance,
    })

  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 pb-3">
        <DatePickerWithRange className="col-span-1" />
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <BalanaceCard
          title="Presupuesto"
          amount={MonthBudget}
          percentage={budgetPercentage}
          data={budgetChartData}
        />
        <BalanaceCard
          title="Gastado"
          amount={MonthSpents}
          percentage={spentPercentage}
          data={spentChartData}
        />
        <BalanaceCard
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
