import { Payment } from "@/types/payment-type"

const CalculateCurrentSpents = ({
  accountId,
  payments,
}: {
  accountId: string
  payments: Payment[]
}) => {
  return payments.map((item) => {
    return {
      id: accountId + " " + Math.random(),
      amount: item ? item.amount : 0,
      accountId: accountId,
      date: item ? item.date : new Date(),
    }
  })
}

export default CalculateCurrentSpents
