export const getTotal = (carrito: any) => {
    const arrGeneral: number = Object.entries(carrito)?.reduce((allTotal, element) => {
        const sumArr: any = element.reduce((total, carritoElement: any) => {
            return carritoElement.amount * carritoElement.price
        }, 0)
        return allTotal + sumArr
    }, 0)

    return arrGeneral.toFixed(2)
}

export const getSubTotal = (carrito: any) => {
    const subTotal = (+getTotal(carrito) - (+getTotal(carrito) * 0.18)).toFixed(2)

    return subTotal
}

export const getIGV = (carrito: any) => {
    const igv = (+getTotal(carrito) * 0.18).toFixed(2)

    return igv
}