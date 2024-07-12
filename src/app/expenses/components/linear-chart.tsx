import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { Payment } from "@/types/payment-type"
import capitalizeFirstLetter from "@/hooks/capitalize-first-letter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const LinearChart = ({ data }: { data: Payment[] }) => {
  const chartConfig = {
    amount: {
      label: "Amount",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig

  const newData = data.map((item) => {
    const date = new Date(item.date)
    const formattedDay = new Intl.DateTimeFormat("es-AR", { day: "2-digit" }).format(date)
    const formattedMonth = new Intl.DateTimeFormat("es-AR", { month: "short" }).format(
      date
    )
    const capitalizedMonth = capitalizeFirstLetter(formattedMonth)

    const formattedDate = `${formattedDay} ${capitalizedMonth}`
    return { ...item, date: formattedDate }
  })

  return (
    <Card className="min-h-[200px] w-full col-span-3 lg:col-span-2 h-fit">
      <CardHeader>
        <CardTitle className="text-sm font-normal text-muted-foreground">
          Gastos en los últimos 30 días
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={newData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 6)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillAmount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-amount)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-amount)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="amount"
              type="natural"
              fill="url(#fillAmount)"
              fillOpacity={0.4}
              stroke="var(--color-amount)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default LinearChart
