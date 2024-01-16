import AccountBalance from "@/types/account-balance-types"
import { ItemDisplay } from "./item-display"

const Container = ({ items }: { items: AccountBalance[] }) => {
  return <ItemDisplay items={items} />
}

export default Container
