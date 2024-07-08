import { SparkAreaChart } from "@tremor/react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

const BalanaceCard = ({
  title,
  amount,
  data,
  percentage,
}: {
  title: string
  amount: number
  data?: { month: string; amount: number }[]
  percentage?: string
}) => {
  let color = "text-gray-500"
  let formattedPercentage = percentage
    ? `${Number(percentage) > 0 ? "+" : ""}${percentage}%`
    : "0"

  if (percentage) {
    color = Number(percentage) > 0 ? "text-green-500" : "text-red-500"
  }

  if (title === "Gastado") {
    color = color === "text-green-500" ? "text-red-500" : "text-green-500"
  }

  return (
    <Card className="xs:max-w-[350px]">
      <CardContent className="p-6 h-full grid grid-cols-2 gap-4">
        <div className="col-span-1 flex flex-col gap-2">
          <CardTitle className="font-bold text-md text-nowrap">{title}</CardTitle>
          <div className="flex flex-col justify-between gap-2">
            <span className="text-3xl font-bold">${amount}</span>
            <p className="text-xs font-bold">
              <span className={color}>{formattedPercentage} </span>
              al mes anterior
            </p>
          </div>
        </div>
        {data && data.length > 1 && (
          <div className="flex flex-col justify-between items-center">
            {title === "Presupuesto" && (
              <div className="w-full text-right">
                <Button
                  variant="ghost"
                  className="rounded-full border bg-card text-card-foreground shadow"
                  size="icon"
                >
                  <span className="font-semibold text-2xl mb-[3px]">+</span>
                </Button>
              </div>
            )}
            <SparkAreaChart
              data={data}
              categories={["amount"]}
              index="month"
              colors={[color.split("-")[1]]}
              className="col-span-1 h-[73%] w-[100%] my-auto mx-auto"
            />
            <span className="text-xs font-bold">Gráfica último año</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default BalanaceCard
