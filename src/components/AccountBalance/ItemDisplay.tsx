import AccountBalance from "@/types/accountBalanceTypes"
import { Separator } from "@/components/ui/separator"
import Item from "./Item"

export const ItemDisplay = ({ items }: { items: AccountBalance[] }) => {
  return (
    <div className="w-full md:w-auto md:h-16 flex flex-col md:flex-row gap-4 bg-black p-4 rounded-md items-center">
      {items.map((item, index) => (
        <div
          className="w-full h-full flex flex-col md:flex-row gap-2 justify-center items-center"
          key={item.name}
        >
          <Item count={item.count} name={item.name} color={item.color} />
          {index < items.length - 1 && (
            <>
              <Separator className="hidden md:flex " orientation="vertical" />
              <Separator className="md:hidden" orientation="horizontal" />
            </>
          )}
        </div>
      ))}
    </div>
  )
}
