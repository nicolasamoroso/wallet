import BalanaceCard from "./balanace-card"

const Dashboard = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      amt: 2100,
    },
  ]

  return (
    <div className="md:max-w-[712px] lg:max-w-[1080px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <BalanaceCard
        title="Presupuesto"
        description="vs el mes pasado"
        amount={10000.0}
        percentage="3"
        data={data}
      />
      <BalanaceCard
        title="Gastado"
        description="vs el mes pasado"
        amount={7275.92}
        percentage="-3"
        data={data}
      />
      <BalanaceCard
        title="Saldo acutal"
        description="restante"
        amount={2724.08}
        percentage="3"
        data={data}
      />
    </div>
  )
}

export default Dashboard
