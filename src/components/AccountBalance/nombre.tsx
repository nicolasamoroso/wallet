import { ItemDisplay } from "./ItemDisplay";
import { BtnNombre } from "./btnNombre";

 

export const Nombre: React.FC = () => {
  return (
    <>
      <div className="w-[90%] md:w-auto flex flex-col items-center gap-20 bg-slate-100">
        <ItemDisplay />
        <BtnNombre />
      </div>
    </>
  );
};
