import Expense from "@/types/expense-types"
import { Accordion } from "@/components/ui/accordion"
import ExpenseItem from "./expense-item"

const ExpenseList = ({ expenseData }: { expenseData: Expense[] }) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="flex flex-col gap-y-3 p-3 w-full min-w-[280px] sm:min-w-[350px] md:min-w-[500px]"
    >
      {expenseData.map((expense, index) => (
        <ExpenseItem key={index} expense={expense} />
      ))}
    </Accordion>
  )
}

export default ExpenseList
