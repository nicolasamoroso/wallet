import { Button } from "./Button"
import { ItemDisplay } from "./ItemDisplay"

export const Nombre: React.FC = () => {
  return (
    <>
      <div className="w-[90%] md:w-auto flex flex-col items-center gap-20 bg-slate-100">
        <ItemDisplay />
        <Button />
      </div>
    </>
  )
}
