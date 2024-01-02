"use client"

import { useEffect, useState } from "react"
import { ReactSortable } from "react-sortablejs"

import Emoji from "@/types/emojisTypes"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import EmojiItem from "./EmojiItem"

const EMOJIS_STORAGE_KEY: string = "emojis"

const EmojiPicker = ({ emojis }: { emojis: Emoji[] }) => {
  const [state, setState] = useState<Emoji[]>([])

  useEffect(() => {
    const emojisFromStorage = JSON.parse(
      localStorage.getItem(EMOJIS_STORAGE_KEY) || "null"
    )
    setState(emojisFromStorage || emojis)
  }, [emojis])

  function updateEmojis(ev: any) {
    const { oldIndex, newIndex } = ev
    const items = [...state]
    const itemToMove = items[oldIndex]
    const itemToReplace = items[newIndex]

    items[oldIndex] = itemToReplace
    items[newIndex] = itemToMove

    localStorage.setItem(EMOJIS_STORAGE_KEY, JSON.stringify(items))
  }

  return (
    <HoverCard>
      <HoverCardTrigger className="cursor-pointer">Hover</HoverCardTrigger>
      <HoverCardContent className="overflow-auto h-[240px]">
        <ReactSortable
          list={state}
          setList={setState}
          onUpdate={(ev) => updateEmojis(ev)}
          className="grid grid-cols-3 grid-rows-3 gap-2"
        >
          {state.map((item) => (
            <EmojiItem key={item.id} emoji={item.emoji} />
          ))}
        </ReactSortable>
      </HoverCardContent>
    </HoverCard>
  )
}

export default EmojiPicker
