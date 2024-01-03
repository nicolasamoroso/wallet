import AccountBalance from "@/types/accountBalanceTypes"
import { ItemDisplay } from "./ItemDisplay"

const Container = ({ items }: { items: AccountBalance[] }) => {
  return <ItemDisplay items={items} />
}

export default Container
