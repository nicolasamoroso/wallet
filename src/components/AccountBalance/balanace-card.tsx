import { Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const BalanaceCard = ({
  title,
  description,
  amount,
  data,
  percentage,
}: {
  title: string
  description: string
  amount: number
  data: { name: string; uv: number; amt: number }[]
  percentage: string
}) => {
  let color = "text-red-500"
  if (Number(percentage) > 0) {
    percentage = `+${percentage}`
    color = "text-green-500"
  }

  return (
    <Card className="w-[350px] h-[133px]">
      <CardHeader className="flex-row items-center justify-between pb-4">
        <CardTitle className="font-normal text-lg">{title}</CardTitle>
        <CardDescription className="text-xs">
          <span className={color}>{percentage}% </span>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between">
        <span className="text-2xl font-medium pt-3">${amount}</span>
        <LineChart
          width={130}
          height={80}
          data={data}
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          className="rounded-xl text-card-foreground"
        >
          <XAxis dataKey="name" hide={true} />
          <YAxis hide={true} />
          <Line type="monotone" dataKey="uv" stroke={color.split("-")[1]} />
        </LineChart>
      </CardContent>
    </Card>
  )
}

export default BalanaceCard
