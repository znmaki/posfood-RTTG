import React, { useContext, useState } from 'react'
import { ProductContext } from '../components/CardMenu/CardMenu'
import { IProductCart } from '../models'

export const useCart = () => {
    const { increaseBy, amount } = useContext(ProductContext)
    const [cart, setCart] = useState<IProductCart[] | undefined>([])

    let productSelect: IProductCart = {
        id: '',
        image: '',
        name: '',
        description: '',
        items: 0,
        price: 0,
        amountP: 0,
    }

    const decreasesProduct: (productSelect: any) => void = (productSelect) => {
        productSelect = { ...productSelect, amountP: amount - 1 }

        if (cart?.some(producto => producto.id === productSelect.id)) {
            const productUpdate = cart?.map(productCart => {
                if (productCart.id === productSelect.id) {
                    increaseBy(-1)
                    productCart.amountP = amount - 1
                }
                return productCart
            })
            setCart(productUpdate)
        } else {
            increaseBy(-1)
            setCart([...cart as IProductCart[], productSelect])
        }
    }

    const increaseProduct: (productSelect: any) => void = (productSelect) => {
        productSelect = { ...productSelect, amountP: amount + 1 }

        if (cart?.some(producto => producto.id === productSelect.id)) {
            const productUpdate = cart?.map(productCart => {
                if (productCart.id === productSelect.id) {
                    increaseBy(+1)
                    productCart.amountP = amount + 1
                }
                return productCart
            })
            setCart(productUpdate)
        } else {
            increaseBy(+1)
            setCart([...cart as IProductCart[], productSelect])
        }
    }

    return {
        cart,
        decreasesProduct,
        increaseProduct
    }
}
