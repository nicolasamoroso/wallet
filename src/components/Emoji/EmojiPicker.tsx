"use client"

import { useState } from "react"
import Picker, { EmojiClickData, SuggestionMode, Theme } from "emoji-picker-react"

const EmojiPicker = () => {
  const onEmojiClick = (emojiData: EmojiClickData) => {
    console.log(emojiData)
  }

  const [open, setOpen] = useState(false)

  let color = Theme.LIGHT
  let suggested = SuggestionMode.RECENT
  let preview = { showPreview: false }
  return (
    <>
      <button onClick={() => setOpen((prev) => !prev)} className="bg-black text-white">
        abrir
      </button>
      {open && (
        <Picker
          theme={color}
          onEmojiClick={onEmojiClick}
          autoFocusSearch={false}
          previewConfig={preview}
          suggestedEmojisMode={suggested}
          className="select-none"
        />
      )}
    </>
  )
}

export default EmojiPicker
