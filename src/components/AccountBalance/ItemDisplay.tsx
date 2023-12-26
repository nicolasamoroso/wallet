 
import { Separator } from "../ui/separator";
import { ItemNombre, ItemNombreProps } from "./Items";
 

const ITEMS: ItemNombreProps[] = [
  { count: 34, name: "Presupuesto", color: "white" },
  { count: 23, name: "Gastado", color: "red" },
  { count: 23, name: "Saldo", color: "green" },
];

export const ItemDisplay = () => {
  return (
    <>
      <div className="w-full md:w-auto md:h-16 flex flex-col md:flex-row gap-4 bg-black p-4 rounded-md items-center">
        {ITEMS.map((item, index) => (
          <div
            className="w-full h-full flex flex-col md:flex-row gap-2 justify-center items-center"
            key={item.name}
          >
            <ItemNombre
              count={item.count}
              name={item.name}
              color={item.color}
            />
            {index < ITEMS.length - 1 && (
              <>
                <Separator className="hidden md:flex " orientation="vertical" />
                <Separator className="md:hidden" orientation="horizontal" />
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
