import { Dispatch, SetStateAction, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { PlusCircle } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Category } from "@/types/category-type"
import { Expense } from "@/types/expense-type"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import DatePicker from "@/components/expenses/date-picker"
import { cn } from "@/utils/clsx"

const FormSchema = z.object({
  name: z.string({
    required_error: "Debe ingresar un nombre.",
  }),
  dob: z.date({
    required_error: "Debe seleccionar una fecha.",
  }),
  amount: z.string({
    required_error: "Debe ingresar una cantidad.",
  }),
  description: z
    .string({
      required_error: "Debe ingresar una descripción.",
    })
    .optional(),
  category: z.string({
    required_error: "Debe ingresar una categoría.",
  }),
})

const AddPayment = ({
  className,
  addExpense,
  categories,
}: {
  className?: string
  payments: Expense[]
  addExpense: (newExpense: Expense) => void
  categories: Category[]
}) => {
  const [open, setOpen] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      description: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Gasto agregado",
    })

    const payment = {
      amount: Number(data.amount),
      category: categories.find((cat) => cat.name === data.category) as Category,
      name: data.name,
      description: data.description,
      date: data.dob,
    } as Expense

    addExpense(payment)

    form.reset()

    setOpen(false)
  }

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          onClick={() => {
            form.reset()
            setOpen(true)
          }}
          className={cn(className, "space-x-2")}
        >
          <PlusCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Agregar Gastos</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" aria-describedby="dialog-content">
        <DialogHeader>
          <DialogTitle className="pb-7">Agregar nuevo gasto</DialogTitle>
        </DialogHeader>
        <p id="dialog-description" className="sr-only">
          Rellene el formulario para poder agregar.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="col-span-9"
            aria-describedby="dialog-description"
          >
            <div className="grid grid-cols-12 gap-3 mb-3">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="flex flex-col col-span-6 gap-2">
                    <FormLabel htmlFor="category">Categoría</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger className="w-full bg-input-background">
                          <SelectValue id="category" placeholder="Categoría" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem
                              className="cursor-pointer"
                              key={category.id}
                              value={category.name}
                            >
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex flex-col col-span-6 gap-2">
                    <FormLabel htmlFor="name">Nombre</FormLabel>
                    <FormControl>
                      <Input
                        id="name"
                        type="text"
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        className="w-full bg-input-background"
                        placeholder="Pizza"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => <DatePicker field={field} />}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem className="flex flex-col col-span-6 gap-2">
                    <FormLabel htmlFor="amount">Cantidad</FormLabel>
                    <FormControl>
                      <Input
                        id="amount"
                        type="text"
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        className="w-full bg-input-background"
                        placeholder="100"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2 col-span-12">
                    <FormLabel htmlFor="description">Descripción</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Pizza de La Cancha"
                        className="resize-none bg-input-background"
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="submit">Agregar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default AddPayment
