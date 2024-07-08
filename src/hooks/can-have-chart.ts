import { Card } from "@/types/card-type"

const CanHaveChart = ({ data }: { data: Card[] }) => {
  let percentage
  let chartData

  if (data.length > 1) {
    const thisMonthData = data.filter((item) => {
      return new Date(item.date).getMonth() === new Date().getMonth()
    }) as Card[]

    const lastMonthData = data.filter((item) => {
      return new Date(item.date).getMonth() === new Date().getMonth() - 1
    }) as Card[]

    const thisMonthAmount = thisMonthData[0].amount
    const lastMonthAmount = lastMonthData[0].amount

    if (lastMonthAmount === 0) percentage = "Primer mes"
    else
      percentage = String(
        Math.round(((thisMonthAmount - lastMonthAmount) / lastMonthAmount) * 100)
      )

    if (data.length > 1) {
      chartData = data.slice(-12).map((item) => ({
        month: String(item.date).split(" ")[1] + " " + String(item.date).split(" ")[2],
        amount: item.amount,
      }))
    }
  }

  return { percentage, chartData }
}

export default CanHaveChart
