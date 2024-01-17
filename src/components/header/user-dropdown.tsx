import Image from "next/image"
import { ChevronDownIcon, LogOutIcon } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Props {
  image: string
  name: string
}

export default function UserDropdown({ image, name }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-2 items-center rounded-md border p-2 select-none bg-primary-foreground text-primary">
        <Image
          src={image}
          alt="User profile picture"
          width={20}
          height={20}
          quality={80}
          className="rounded-full w-5 h-5"
        />
        <span>{name}</span>
        <ChevronDownIcon className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent collisionPadding={8} className="w-48">
        <DropdownMenuItem className="cursor-pointer">
          <LogOutIcon className="h-4 w-4 mr-2" /> Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
