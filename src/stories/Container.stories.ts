import type { Meta, StoryObj } from "@storybook/react"

import Container from "@/components/AccountBalance/Container"

const meta = {
  title: "Container",
  component: Container,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
    argTypes: {
      items: { control: "object" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Container>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    items: [
      { count: 34, name: "Presupuesto", color: "white" },
      { count: 23, name: "Gastado", color: "red" },
      { count: 23, name: "Saldo", color: "green" },
    ],
  },
}
