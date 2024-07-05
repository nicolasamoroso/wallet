"use client"

import { useState } from "react"

import { Payment } from "@/types/paymentType"
import CalculateCurrentBalances from "@/hooks/calculate-current-balances"
import CalculateCurrentSpents from "@/hooks/calculate-current-spents"
import CanHaveChart from "@/hooks/can-have-chart"
import getMonthlyTotals from "@/hooks/get-monthly-totals"
import { Budget_CurrentBalance_Spent } from "@/app/page"
import BalanaceCard from "./balanace-card"

const Dashboard = ({
  budgets,
  payments,
  accountId,
}: {
  budgets: Budget_CurrentBalance_Spent[]
  payments: Payment[]
  accountId: string
}) => {
  const spents = CalculateCurrentSpents({
    accountId: accountId,
    payments: payments,
  }) as Budget_CurrentBalance_Spent[]

  const BudgetsPerMonth = getMonthlyTotals(budgets) as Budget_CurrentBalance_Spent[]
  const SpentsPerMonth = getMonthlyTotals(spents) as Budget_CurrentBalance_Spent[]

  const currentBalance = CalculateCurrentBalances({
    budgets: BudgetsPerMonth,
    spents: SpentsPerMonth,
    accountId: accountId,
  }) as Budget_CurrentBalance_Spent[]

  const [MonthBudget, setBudgets] = useState<number>(
    BudgetsPerMonth[BudgetsPerMonth.length - 1].amount
  )
  const [MonthSpents, setSpents] = useState<number>(
    SpentsPerMonth[SpentsPerMonth.length - 1].amount
  )
  const [MonthBalance, setCurrentBalance] = useState<number>(
    currentBalance[currentBalance.length - 1].amount
  )

  const { percentage: budgetPercentage, chartData: budgetChartData } = CanHaveChart({
    data: BudgetsPerMonth,
  })

  const { percentage: spentPercentage, chartData: spentChartData } = CanHaveChart({
    data: SpentsPerMonth,
  })

  const { percentage: currentBalancePercentage, chartData: currentBalanceChartData } =
    CanHaveChart({
      data: currentBalance,
    })

  // const addBudget = async (amount: number) => {
  //   const response = await setBudget({
  //     accountId: accountId,
  //     budgetAmount: amount,
  //   })

  //   if (response) {
  //     setBudgets(() => amount)
  //   }
  // }

  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
      {/* <DatePickerWithRange className="col-span-3 sm:col-span-1" /> */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 col-span-3">
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
