import Expense from "@/types/expenseTypes";
import ExpenseItem from "./ExpenseItem";

// const expenseData = [
//   {
//     emoji: "🍗",
//     name: "info",
//     product: "Pollo",
//     amount: 20,
//     open: false,
//     details: "asd",
//   },
//   {
//     emoji: "🥗",
//     name: "info",
//     product: "Ensalada",
//     amount: 10,
//     open: false,
//     details: "asd",
//   },
//   {
//     emoji: "🏋️‍♂️",
//     name: "info",
//     product: "Gym",
//     amount: 30,
//     open: false,
//     details: "asd",
//   },
//   {
//     emoji: "🚿",
//     name: "info",
//     product: "UTE",
//     amount: 5,
//     open: false,
//     details: "asd",
//   },
// ] as Expense[];

// return <ExpenseList expenseData={expenseData} />;

const ExpenseList = ({ expenseData }: { expenseData: Expense[] }) => {
  return (
    <span className="flex flex-col gap-y-3 p-3">
      {expenseData.map((expense, index) => (
        <ExpenseItem key={index} expense={expense} />
      ))}
    </span>
  );
};

export default ExpenseList;
