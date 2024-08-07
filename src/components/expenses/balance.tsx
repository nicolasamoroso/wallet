import { TrendingUpIcon } from "lucide-react"

import { Breakdown } from "@/types/breakdown-type"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import DonutChart from "@/components/expenses/donut-chart"
import { cn } from "@/utils/clsx"

const Balance = ({ data, className }: { data: Breakdown[]; className?: string }) => {
  const formattedData = data.map((d) => ({
    category: d.name,
    amounts: d.amount,
    fill: `var(--color-${d.name ? d.name.toLowerCase() : "gray"})`,
  }))

  const totalAmount = formattedData
    .reduce((acc, { amounts }) => acc + amounts, 0)
    .toLocaleString("es-AR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })

  return (
    <Card className={cn("flex h-fit lg:block", className)}>
      <div>
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
