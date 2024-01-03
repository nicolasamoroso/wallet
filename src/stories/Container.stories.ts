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
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Container>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
