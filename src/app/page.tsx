"use client"

import { Card } from "@/types/card-type"
import useGetData from "@/hooks/use-get-payment-data"
import Dashboard from "@/components/balance/dashboard"
import { columns } from "@/components/payments/columns"
import { PaymentTable } from "@/components/payments/payment-table"

export default function Home() {
  const budgets = [
    {
      id: "1",
      amount: 1200,
      accountId: "1",
      date: new Date(2023, 7, 1, 12),
    },
    {
      id: "2",
      amount: 800,
      accountId: "1",
      date: new Date(2023, 7, 15, 12),
    },
    {
      id: "3",
      amount: 950,
      accountId: "1",
      date: new Date(2023, 8, 5, 12),
    },
    {
      id: "4",
      amount: 750,
      accountId: "1",
      date: new Date(2023, 8, 22, 12),
    },
    {
      id: "5",
      amount: 2300,
      accountId: "1",
      date: new Date(2023, 9, 10, 12),
    },
    {
      id: "6",
      amount: 1100,
      accountId: "1",
      date: new Date(2023, 10, 3, 12),
    },
    {
      id: "7",
      amount: 1400,
      accountId: "1",
      date: new Date(2023, 11, 12, 12),
    },
    {
      id: "8",
      amount: 900,
      accountId: "1",
      date: new Date(2024, 0, 25, 12),
    },
    {
      id: "9",
      amount: 300,
      accountId: "1",
      date: new Date(2024, 1, 14, 12),
    },
    {
      id: "10",
      amount: 600,
      accountId: "1",
      date: new Date(2024, 2, 8, 12),
    },
    {
      id: "11",
      amount: 450,
      accountId: "1",
      date: new Date(2024, 3, 19, 12),
    },
    {
      id: "12",
      amount: 1000,
      accountId: "1",
      date: new Date(2024, 4, 1, 12),
    },
    {
      id: "13",
      amount: 150,
      accountId: "1",
      date: new Date(2024, 4, 8, 12),
    },
    {
      id: "14",
      amount: 600,
      accountId: "1",
      date: new Date(2024, 4, 18, 12),
    },
    {
      id: "15",
      amount: 2000,
      accountId: "1",
      date: new Date(2024, 5, 1, 12),
    },
    {
      id: "16",
      amount: 500,
      accountId: "1",
      date: new Date(2024, 5, 9, 12),
    },
    {
      id: "17",
      amount: 678,
      accountId: "1",
      date: new Date(2024, 5, 13, 12),
    },
    {
      id: "18",
      amount: 3000,
      accountId: "1",
      date: new Date(2024, 6, 1, 12),
    },
    {
      id: "19",
      amount: 300,
      accountId: "1",
      date: new Date(2024, 6, 16, 12),
    },
    {
      id: "20",
      amount: 1540,
      accountId: "1",
      date: new Date(2024, 6, 27, 12),
    },
  ] as Card[]

  const accountId = "1"

  const { data, setData } = useGetData({ name: "payments" })

  return (
    <div className="xs:max-w-[590px] lg:max-w-[1080px] mx-auto flex flex-col gap-3">
      <Dashboard budgets={budgets} accountId={accountId} payments={data} />
      <PaymentTable columns={columns} data={data} setData={setData} />
    </div>
  )
}
