"use client"

import { useState } from "react"
import Picker, { EmojiClickData, SuggestionMode, Theme } from "emoji-picker-react"
import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const EmojiPicker = ({
  field,
}: {
  field: ControllerRenderProps<FieldValues, "emoji">
}) => {
  const [open, setOpen] = useState(false)
  const [emoji, setEmoji] = useState("🍕")

  const onEmojiClick = (emojiData: EmojiClickData) => {
    field.onChange(emojiData.emoji)
    setEmoji(emojiData.emoji)
    setOpen(false)
  }

  let color = Theme.LIGHT
  let suggested = SuggestionMode.RECENT
  let preview = { showPreview: false }

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger className="w-[36px] h-[36px] text-center mx-auto rounded-full bg-input-background border">
        <p className="">{emoji}</p>
      </PopoverTrigger>
      <PopoverContent className="sm:w-[280px] md:w-[350px] lg:w-[500px] max-h-[150px] p-0 rounded-xl">
        <Picker
          theme={color}
          onEmojiClick={onEmojiClick}
          autoFocusSearch={false}
          previewConfig={preview}
          suggestedEmojisMode={suggested}
          className="select-none"
          width={"100%"}
          lazyLoadEmojis={true}
        />
      </PopoverContent>
    </Popover>
  )
}

export default EmojiPicker
