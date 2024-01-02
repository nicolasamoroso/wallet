import Emoji from "@/types/emojisTypes"
import Expense from "@/types/expenseTypes"
// import { Container } from "@/components/AccountBalance/Container"
import EmojiPicker from "@/components/Emoji/EmojiPicker"
import ExpenseList from "@/components/Expense/ExpenseList"

export default function Home() {
  const expenseData = [
    {
      emoji: "🍗",
      name: "info",
      product: "Pollo",
      amount: 20,
      details: "asd",
      id: 1,
    },
    {
      emoji: "🥗",
      name: "info",
      product: "Ensalada",
      amount: 10,
      details: "asd",
      id: 2,
    },
    {
      emoji: "🏋️‍♂️",
      name: "info",
      product: "Gym",
      amount: 30,
      details: "asd",
      id: 3,
    },
    {
      emoji: "🚿",
      name: "info",
      product: "Agua",
      amount: 5,
      details: "asd",
      id: 4,
    },
  ] as Expense[]

  const emojis = [
    { id: 1, emoji: "🍕" },
    { id: 2, emoji: "🍔" },
    { id: 3, emoji: "🌭" },
    { id: 4, emoji: "🍟" },
    { id: 5, emoji: "🍿" },
    { id: 6, emoji: "🥓" },
    { id: 7, emoji: "🧇" },
    { id: 8, emoji: "🥞" },
    { id: 9, emoji: "🍞" },
    { id: 10, emoji: "🥐" },
    { id: 11, emoji: "🥨" },
  ] as Emoji[]

  return (
    <div className="flex justify-center h-screen items-center">
      <div>
        {/* <Container /> */}
        <ExpenseList expenseData={expenseData} />
        <EmojiPicker emojis={emojis} />
      </div>
    </div>
  )
}
