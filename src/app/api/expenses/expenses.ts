import { Expense } from "@/types/expense-type"

export const expenses: Expense[] = [
  {
    id: "10.5821700564741619",
    amount: 970,
    category: {
      id: "1",
      name: "Comida",
      color: "#fecaca",
      textColor: "#991b1b",
    },
    name: "Pizza",
    description: "",
    date: new Date("2024-07-02T03:00:00.000Z"),
  },
  {
    id: "10.29209200904081745",
    amount: 1500,
    category: {
      id: "2",
      name: "Gym",
      color: "#c4e4fd",
      textColor: "#ffffff",
    },
    name: "Cuota",
    description: "",
    date: new Date("2024-06-24T03:00:00.000Z"),
  },
  {
    id: "10.7867323265685944",
    amount: 2300,
    category: {
      id: "3",
      name: "Salud",
      color: "#ff0000",
      textColor: "#991b1b",
    },
    name: "Casmu",
    description: "",
    date: new Date("2024-06-27T03:00:00.000Z"),
  },
]
