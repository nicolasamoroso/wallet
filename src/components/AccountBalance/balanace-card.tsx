import { SparkAreaChart } from "@tremor/react"

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

  if (percentage === undefined) percentage = "0"

  if (Number(percentage)) {
    if (Number(percentage) > 0) {
      color = "text-green-500"
      percentage = `+${percentage}%`
    } else {
      color = "text-red-500"
      percentage = `${percentage}%`
    }
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
              <span className={color}>{percentage} </span>
              al mes anterior
            </p>
          </div>
        </div>
        {data && data.length > 1 && (
          <div className="flex flex-col justify-between items-center">
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
