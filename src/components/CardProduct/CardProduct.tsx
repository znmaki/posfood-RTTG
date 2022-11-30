import { CardProductProps, ProductContextProps } from '@/models';

import { createContext } from 'react';
import { useProduct } from '@/hooks';

import './styles/CardMenu.css';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

const CardProduct = ({ children, product, onChange }: CardProductProps) => {

	const { amount, increaseBy } = useProduct({ onChange, product });

	return (
		<Provider value={{
			amount,
			increaseBy,
			product,
		}}>
			<div className='bg-light-black flex flex-col p-5 rounded-lg relative'>
				{children}
			</div>
		</Provider>
	)
}

export default CardProduct
