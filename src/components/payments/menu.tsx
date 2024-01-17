import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Menu = ({ table }: { table: any }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="m-2">
        <Button variant="outline" className="ml-auto bg-primary-foreground">
          Columns
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {table
          .getAllColumns()
          .filter(
            (column: any) =>
              column.getCanHide() && !["emoji", "actions", "amount"].includes(column.id)
          )
          .map((column: any) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize hover:cursor-pointer"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            )
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Menu
