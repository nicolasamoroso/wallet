import { Dispatch, SetStateAction, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { PlusCircle, TagIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Category } from "@/types/category-type"
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
import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
  name: z.string({
    required_error: "Debe ingresar un nombre.",
  }),
  color: z.string({
    required_error: "Debe seleccionar un color de fondo.",
  }),
  textColor: z.string({
    required_error: "Debe seleccionar un color de texto.",
  }),
})

const AddCategories = ({
  categories,
  setCategories,
}: {
  categories: Category[]
  setCategories: Dispatch<SetStateAction<Category[]>>
}) => {
  const [open, setOpen] = useState(false)
  const [color, setColor] = useState("#fecaca")
  const [textColor, setTextColor] = useState("#991b1b")
  const [name, setName] = useState("")

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      color: "#fecaca",
      textColor: "#991b1b",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Categoría creada",
    })

    const category = {
      id: categories.length + 1,
      name: data.name,
      color: data.color,
      textColor: data.textColor,
    } as Category

    if (
      categories.some((cat) => cat.name.toLowerCase() === category.name.toLowerCase())
    ) {
      toast({
        title: "La categoría ya existe",
        description: "Por favor, ingrese una categoría diferente.",
      })
      return
    }

    setCategories([...categories, category])
    localStorage.setItem("category", JSON.stringify([...categories, category]))

    form.reset()

    setOpen(false)
  }

  return (
    <>
      <Dialog onOpenChange={setOpen} open={open}>
        <DialogTrigger asChild>
          <Button
            variant="default"
            onClick={() => {
              form.reset()
              setOpen(true)
              setName("")
              setColor("#fecaca")
              setTextColor("#991b1b")
            }}
            className="space-x-2"
          >
            <PlusCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Crear categoría</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]" aria-describedby="dialog-content">
          <DialogHeader>
            <DialogTitle className="pb-7">Crear una nueva categoría</DialogTitle>
          </DialogHeader>
          <p id="dialog-description" className="sr-only">
            Rellene el formulario para poder crear.
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
                          placeholder="Comida"
                          onInput={(e) => {
                            const input = e.target as HTMLInputElement
                            setName(input.value)
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="color"
                  render={({ field }) => (
                    <FormItem className="flex flex-col col-span-6 gap-2">
                      <FormLabel htmlFor="color">Color de fondo</FormLabel>
                      <FormControl>
                        <Input
                          id="color"
                          type="color"
                          name="color"
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          className="w-full bg-input-background"
                          placeholder="100"
                          onInput={(e) => {
                            const input = e.target as HTMLInputElement
                            setColor(input.value)
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="textColor"
                  render={({ field }) => (
                    <FormItem className="flex flex-col col-span-6 gap-2">
                      <FormLabel htmlFor="textColor">Color del texto</FormLabel>
                      <FormControl>
                        <Input
                          id="textColor"
                          type="color"
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          className="w-full bg-input-background"
                          placeholder="100"
                          onInput={(e) => {
                            const input = e.target as HTMLInputElement
                            setTextColor(input.value)
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {name !== "" && (
                <div>
                  <span
                    className="px-2 py-1 bg-red-200 text-red-800 rounded-md flex items-center gap-2 w-fit"
                    style={{ backgroundColor: color, color: textColor }}
                  >
                    <TagIcon className="w-4 h-4" />
                    {name}
                  </span>
                </div>
              )}
              <DialogFooter>
                <Button type="submit" className="mt-4 md:mt-0">
                  Crear
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default AddCategories
