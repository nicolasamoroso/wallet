const EmojiItem = ({ emoji }: { emoji: string }) => {
  return (
    <p className="border border-border text-center cursor-pointer h-16 w-full text-2xl flex items-center justify-center rounded-[--radius] bg-secondary hover:scale-110">
      {emoji}
    </p>
  )
}

export default EmojiItem
