export type ColorKeys = 'red' | 'white' | 'green';  

const colors: Record<ColorKeys, string> = {
    red: 'text-red-500',
    white: 'text-white',
    green: 'text-green-500',
};

export interface ItemNombreProps {
    name: string;
    count: number;
    color: ColorKeys;  
}

export const ItemNombre: React.FC<ItemNombreProps> = ({name, count, color}) => {
    return (
        <>
            <div className={`${colors[color]} flex gap-2`}>
                <span>{name}:</span>
                <span>${count}</span>
            </div>
        </>
    );
}
