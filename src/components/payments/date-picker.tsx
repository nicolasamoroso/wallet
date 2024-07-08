"use client"

import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/utils/clsx"

const DatePicker = ({
  field,
}: {
  field: ControllerRenderProps<
    {
      amount: string
      name: string
      dob: Date
      category: string
      description?: string | undefined
    },
    "dob"
  >
}) => {
  return (
    <FormItem className="flex flex-col gap-2 col-span-6">
      <FormLabel htmlFor="date">Fecha</FormLabel>
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant={"outline"}
              className={cn(
                "pl-3 text-left font-normal bg-input-background",
                !field.value && "text-muted-foreground"
              )}
            >
              {field.value ? format(field.value, "PPP") : <span>01/01/2024</span>}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={field.value}
            onSelect={field.onChange}
            disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
          />
        </PopoverContent>
      </Popover>
      <FormMessage />
    </FormItem>
  )
}

export default DatePicker
