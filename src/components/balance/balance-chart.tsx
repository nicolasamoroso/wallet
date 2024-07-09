import { SparkAreaChart } from "@tremor/react"

const BalanceChart = ({
  data,
  color,
}: {
  data?: { month: string; amount: number }[]
  color: string
}) => {
  return (
    <>
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
    </>
  )
}

export default BalanceChart
