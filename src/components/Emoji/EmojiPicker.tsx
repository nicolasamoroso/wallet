"use client"

import { useState } from "react"
import Picker, { EmojiClickData, SuggestionMode, Theme } from "emoji-picker-react"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const EmojiPicker = () => {
  const onEmojiClick = (emojiData: EmojiClickData) => {
    console.log(emojiData)
  }

  let color = Theme.LIGHT
  let suggested = SuggestionMode.RECENT
  let preview = { showPreview: false }
  return (
    <>
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent className="md:max-w-[350px] sm:w-[280px] max-h-[450px]  p-0 rounded-xl">
          <Picker
            theme={color}
            onEmojiClick={onEmojiClick}
            autoFocusSearch={false}
            previewConfig={preview}
            suggestedEmojisMode={suggested}
            className="select-none"
            width={"100%"}
          />
        </PopoverContent>
      </Popover>
    </>
  )
}

export default EmojiPicker
