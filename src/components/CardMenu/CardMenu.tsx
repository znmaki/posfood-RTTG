import { createContext } from 'react';

import { useProduct } from '../../hooks/useProduct';
import { CardMenuProps, IProductCart, ProductContextProps } from '../../models';

import './styles/CardMenu.css';


export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

const CardMenu = ({ children, product }: CardMenuProps) => {

	const { amount, increaseBy } = useProduct();
	

	return (
		<Provider value={{
			amount,
			increaseBy,
			product,
		}}>
			<div className='bg-light-black flex flex-col p-6 rounded-lg relative'>
				{children}
			</div>
		</Provider>
	)
}

export default CardMenu
