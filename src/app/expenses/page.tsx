"use client"

import getMonthlyBreakdown from "@/hooks/get-monthly-breakdown"
import useGetData from "@/hooks/use-get-payment-data"
import { DatePickerWithRange } from "@/components/balance/range-date-picker"
import { columns } from "@/components/payments/columns"
import AddCategories from "@/app/expenses/components/add-categories"
import Balance from "@/app/expenses/components/balance"
import Breakdown from "@/app/expenses/components/breakdown"
import LinearChart from "@/app/expenses/components/linear-chart"
import PaymentTable from "@/app/expenses/components/table"

export default function Home() {
  const { data, setData } = useGetData({ name: "payments" })
  const { data: categories, setData: setCategories } = useGetData({ name: "category" })

  const breakdownData = getMonthlyBreakdown(data)

  const pieData = breakdownData.map((data) => ({
    category: data.name,
    amounts: data.amount,
    fill: `var(--color-${data.name.toLowerCase()})`,
  }))

  return (
    <>
      <div className="xs:max-w-[590px] lg:max-w-[1080px] mx-auto flex flex-col gap-3">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 lg:gap-x-3">
          <h1 className="text-3xl font-semibold col-span-2">Gastos</h1>
          <DatePickerWithRange className="col-span-1" />
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 lg:gap-x-3">
          <div className="col-span-2 lg:col-span-1 grid grid-cols-2 gap-3">
            <Balance data={pieData} />
            <Breakdown data={breakdownData} />
          </div>
          <LinearChart data={data} />
        </div>
        <AddCategories categories={categories} setCategories={setCategories} />
        <div className="col-span-3 pt-10">
          <PaymentTable
            columns={columns}
            data={data}
            setData={setData}
            categories={categories}
          />
        </div>
      </div>
    </>
  )
}
