import { useState } from 'react'
import { IProduct, onChangeArg } from '@/models';

interface useProductProps {
    product: IProduct;
    onChange?: (args: onChangeArg) => void
}

export const useProduct = ({ onChange, product }: useProductProps) => {

    const [amount, setAmount] = useState(0)

    const increaseBy = (value: number) => {
        const newValue = Math.max(amount + value, 0)

        setAmount(newValue)

        onChange && onChange({ amount: newValue, product });
    }

    return {
        amount,
        increaseBy
    }
}