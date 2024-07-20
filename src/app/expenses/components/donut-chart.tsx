import { Pie, PieChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const DonutChart = ({
  data,
}: {
  data: {
    category: string
    amounts: number
    fill: string
  }[]
}) => {
  const chartConfig = {
    amounts: {
      label: "Cantidad",
    },
    ...data.reduce((config, item, index) => {
      const categoryKey = item.category ? item.category.toLowerCase() : "other"
      return {
        ...config,
        [categoryKey]: {
          label: item.category,
          color: `hsl(var(--chart-${index + 1}))`,
        },
      }
    }, {}),
  } as ChartConfig

  return (
    <div className="p-6 w-full hidden 2xs:pl-0 sm:pl-6 2xs:block lg:hidden">
      <ChartContainer config={chartConfig} className="mx-auto max-w-[220px]">
        <PieChart>
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Pie data={data} dataKey="amounts" nameKey="category" innerRadius={25} />
        </PieChart>
      </ChartContainer>
      {data && data.length > 0 && (
        <span className="flex justify-center text-xs">Cantidades por categoría</span>
      )}
    </div>
  )
}

export default DonutChart
