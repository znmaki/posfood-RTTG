import { useState } from "react"
import { IProduct, ProductInCart } from "@/models"


export const useCart = () => {
    const [carrito, setCarrito] = useState<{ [key: string]: ProductInCart }>({})

    const onProductChange = ({ amount, product }: { amount: number, product: IProduct }) => {

        setCarrito(oldCarrito => {

            if (amount === 0) {
                const { [product.id]: toDelete, ...rest } = oldCarrito
                return rest;
            }

            return {
                ...oldCarrito,
                [product.id]: { ...product, amount }
            }
        })
    }

    return{
        carrito,

        onProductChange
    }
}
