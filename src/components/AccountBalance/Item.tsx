import AccountBalance from "@/types/accountBalanceTypes"

const colors = {
  red: "text-red-500",
  white: "text-white",
  green: "text-green-500",
}

const Item = ({ name, count, color }: AccountBalance) => {
  return (
    <div className={`${colors[color]} flex gap-2`}>
      <span>{name}:</span>
      <span>${count}</span>
    </div>
  )
}

export default Item
