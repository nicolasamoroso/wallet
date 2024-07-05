"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
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
import { toast } from "@/components/ui/use-toast"
import DatePicker from "@/components/payments/date-picker"

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
})

const AddPayment = ({}: {}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">+ Agregar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Agregar nuevo saldo</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you re done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="col-span-9">
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <div className="flex flex-col gap-3">
                  <FormItem className="flex flex-col gap-2">
                    <FormLabel htmlFor="name">Nombre</FormLabel>
                    <FormControl>
                      <Input
                        id="name"
                        type="text"
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        className="w-full bg-input-background"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  <DatePicker field={field} />
                </div>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit">Cargar</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default AddPayment
