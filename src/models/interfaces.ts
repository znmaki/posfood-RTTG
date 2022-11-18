export interface IProduct {
    id: string;
    image: string;
    name: string;
    description: string;
    items: number;
    price: number;
}

export interface CardMenuProps {
    children?: React.ReactElement | React.ReactElement[];
    product: IProduct
}

export interface ProductContextProps {
    amount: number;
    increaseBy: (value: number) => void;
    product: IProduct;
}

export interface IProductCart {
    id: string;
    image: string;
    name: string;
    description: string;
    items: number;
    price: number;
    amountP?: number;
}

export interface BtnPruebaProps {
    productBtn: IProductCart;
    setCarrito: React.Dispatch<React.SetStateAction<IProductCart[] | undefined>>;
    carrito: IProductCart[] | undefined
}