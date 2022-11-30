export interface IProduct {
    id: string;
    image: string;
    name: string;
    description: string;
    items: number;
    price: number;
}

export interface ContentMenuProps {
    children?: React.ReactElement | React.ReactElement[];
}

export interface CardProductProps {
    children?: React.ReactElement | React.ReactElement[];
    product: IProduct;
    onChange?: (args: onChangeArg) => void
}

export interface ProductContextProps {
    amount: number;
    increaseBy: (value: number) => void;
    product: IProduct;
}

export interface ElementsContextProps {
    changeIdenti: () => void;
    hidden: boolean;
}

export interface onChangeArg {
    product: IProduct;
    amount: number;
}

export interface ProductInCart extends IProduct {
    amount: number
}

export interface onProductChangeProps {
    onProductChange: ({ amount, product }: {
        amount: number;
        product: IProduct;
    }) => void
}