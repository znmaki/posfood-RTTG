import { useContext, useState } from 'react';
import { ProductContext } from "./CardMenu/CardMenu"
import { BtnPruebaProps, IProductCart } from '../models/interfaces';

const BtnPrueba = ({ productBtn, setCarrito, carrito }: BtnPruebaProps) => {
    const { increaseBy, amount } = useContext(ProductContext)
    /* const [cart, setCart] = useState<IProductCart[] | undefined>([]) */

    let productSelect: IProductCart = {
        id: '',
        image: '',
        name: '',
        description: '',
        items: 0,
        price: 0,
        amountP: 0,
    }

    const decreasesProduct: (productBtn: any) => void = (productBtn) => {
        /* increaseBy(+1);
        productBtn.amountP = amount
        console.log(productBtn); */
        /* console.log({ ...productBtn, amount }); */

        productSelect = { ...productBtn, amountP: amount - 1 }

        /* productSelect = {
            id: productBtn.id,
            image: productBtn.image,
            name: productBtn.name,
            description: productBtn.description,
            items: productBtn.items,
            price: productBtn.price,
            amountP: amount - 1,
        } */

        if (carrito?.some(producto => producto.id === productSelect.id)) {
            const productUpdate = carrito?.map(productCart => {
                if (productCart.id === productSelect.id) {
                    increaseBy(-1)
                    productCart.amountP = amount - 1
                }
                return productCart
            })
            setCarrito(productUpdate)
        } else {
            increaseBy(-1)
            setCarrito([...carrito as IProductCart[], productSelect])
        }
    }

    const increaseProduct: (productBtn: any) => void = (productBtn) => {
        /* productSelect = { ...productBtn, amountP: amount + 1 } */

        productSelect = {
            id: productBtn.id,
            image: productBtn.image,
            name: productBtn.name,
            description: productBtn.description,
            items: productBtn.items,
            price: productBtn.price,
            amountP: amount + 1,
        }

        if (carrito?.some(producto => producto.id === productSelect.id)) {
            const productUpdate = carrito?.map(productCart => {
                if (productCart.id === productSelect.id) {
                    increaseBy(+1)
                    productCart.amountP = amount + 1
                }
                return productCart
            })
            setCarrito(productUpdate)
        } else {
            increaseBy(+1)
            setCarrito([...carrito as IProductCart[], productSelect])
        }
    }

    return (
        <div>
            <button className={`${amount <= 0 ? 'btn-disabled' : 'bg-cyan-50'}`} disabled={amount <= 0 ? true : false} onClick={() => decreasesProduct(productBtn)}>-</button>
            <div>{amount}</div>
            {/* {amount>=0 && (
                <button onClick={() => increaseProduct(productBtn)}>+</button>
            )} */}
            <button onClick={() => increaseProduct(productBtn)}>+</button>

            {/* {cart?.map(cart => (<><p>{cart.amountP}</p> <p>{cart.name}</p></>))} */}
        </div >
    )
}

export default BtnPrueba