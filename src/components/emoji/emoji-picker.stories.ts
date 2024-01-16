import type { Meta, StoryObj } from "@storybook/react"

import EmojiPicker from "@/components/emoji/emoji-picker"

const meta = {
  title: "EmojiPicker",
  component: EmojiPicker,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EmojiPicker>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
