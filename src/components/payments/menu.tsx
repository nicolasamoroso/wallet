import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Checked = DropdownMenuCheckboxItemProps["checked"]

const Menu = ({
  setFilter,
  filter,
}: {
  setFilter: Dispatch<SetStateAction<string>>
  filter: string
}) => {
  return (
    <div className="grid gap-3 grid-span-12 grid-cols-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="p-0 bg-card border border-border gap-2 col-span-3 lg:col-span-2"
          >
            Cambiar filtro{" "}
            <span className="text-muted-foreground">
              (
              {filter === "Category"
                ? "Categoría"
                : filter === "Name"
                  ? "Nombre"
                  : "Cantidad"}
              )
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center">
          <DropdownMenuLabel>Filtros por</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="hover:cursor-pointer"
            onClick={() => setFilter("Category")}
          >
            Categoría
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:cursor-pointer"
            onClick={() => setFilter("Name")}
          >
            Nombre
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:cursor-pointer"
            onClick={() => setFilter("Amount")}
          >
            Cantidad
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Menu
