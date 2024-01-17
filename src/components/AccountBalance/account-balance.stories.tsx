import type { Meta, StoryObj } from "@storybook/react"

import Dashboard from "./dashboard"

const meta = {
  title: "Account Balance",
  component: Dashboard,
  parameters: {
    backgrounds: {
      default: "light",
    },
    argTypes: {
      columns: { control: "object" },
      data: { control: "object" },
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Dashboard>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
