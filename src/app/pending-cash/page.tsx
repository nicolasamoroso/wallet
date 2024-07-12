"use client"

import { useEffect, useState } from "react"

import useGetData from "@/hooks/use-get-payment-data"
import BalanceCard from "@/components/balance/balance-card"
import { columns } from "@/components/payments/columns"
import { PaymentTable } from "@/components/payments/payment-table"

export default function Home() {
  const { data, setData } = useGetData({ name: "pending" })

  return (
    <div className="xs:max-w-[590px] lg:max-w-[1080px] mx-auto flex flex-col gap-3">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <BalanceCard title="Gastos" amount={13465} percentage={"34"} data={data} />
        <BalanceCard
          title="Ingresos pendientes"
          amount={6534}
          percentage={"36"}
          data={data}
        />
      </div>
      <PaymentTable columns={columns} data={data} setData={setData} />
    </div>
  )
}
