import Expense from "@/types/expenseTypes"
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const ExpenseItem = ({ expense }: { expense: Expense }) => {
  const { emoji, product, amount, details, id } = expense
  return (
    <AccordionItem
      value={`item-${id}`}
      className="bg-primary-foreground shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] rounded-[--radius] border border-border"
    >
      <AccordionTrigger className="hover:no-underline p-2 md:p-4">
        <div className="flex justify-between w-full px-2">
          <span className="flex gap-5">
            <p>{emoji}</p>
            <p>{product}</p>
          </span>
          <p>${amount}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent className="border-t border-border p-4">
        <p>{details}</p>
      </AccordionContent>
    </AccordionItem>
  )
}

export default ExpenseItem
