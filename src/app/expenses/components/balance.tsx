import { TrendingUpIcon } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import DonutChart from "@/app/expenses/components/donut-chart"

const Balance = ({
  data,
}: {
  data: {
    name: string
    amount: number
    id: number
  }[]
}) => {
  const formattedData = data.map((d) => {
    const name = d.name ? d.name.toLowerCase() : ""
    return {
      category: d.name,
      amounts: d.amount,
      fill: `var(--color-${name})`,
    }
  })

  const totalAmount = formattedData
    .reduce((acc, { amounts }) => acc + amounts, 0)
    .toLocaleString("es-AR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })

  return (
    <Card className="flex h-fit col-span-2">
      <div className="flex flex-col justify-between">
        <CardHeader>
          <CardTitle className="text-xl font-medium">
            Total en los últimos 30 días
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-semibold">${totalAmount}</p>
          <p className="text-xs font-medium flex items-center gap-2 pt-2">
            <TrendingUpIcon className="w-5 h-5 text-green-500" />
            +54% al mes anterior
          </p>
        </CardContent>
      </div>
      <DonutChart data={formattedData} />
    </Card>
  )
}

export default Balance
