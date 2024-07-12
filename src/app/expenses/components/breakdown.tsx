import { Payment } from "@/types/payment-type"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Breakdown = ({
  data,
  className,
}: {
  data: {
    name: string
    amount: number
    id: number
  }[]
  className?: string
}) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-xl font-medium">Desglose de los gastos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          {data && data.length > 0 ? (
            data.map(({ name, amount, id }) => (
              <div key={id} className="flex flex-col">
                <div className="text-lg font-semibold">
                  $
                  {amount.toLocaleString("es-AR", {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1,
                  })}
                </div>
                <div className="text-sm text-muted-foreground">{name}</div>
              </div>
            ))
          ) : (
            <span>No hay datos</span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default Breakdown
