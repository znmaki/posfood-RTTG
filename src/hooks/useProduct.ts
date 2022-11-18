import { useState } from 'react'

export const useProduct = () => {

    const [amount, setAmount] = useState(0)

    const increaseBy = (value: number) => {
        setAmount(prev => Math.max(prev + value, 0))
    }

    return {
        amount,
        increaseBy
    }
}