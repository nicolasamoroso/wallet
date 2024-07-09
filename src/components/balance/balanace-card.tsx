import { Card, CardContent, CardTitle } from "@/components/ui/card"
import BalanceChart from "@/components/balance/balance-chart"

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

  if (percentage) color = Number(percentage) > 0 ? "text-green-500" : "text-red-500"

  if (title === "Gastado")
    color = color === "text-green-500" ? "text-red-500" : "text-green-500"

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
        <BalanceChart data={data} color={color} />
      </CardContent>
    </Card>
  )
}

export default BalanaceCard
