import apiMenu from '@/data/api.json'

import { onProductChangeProps } from '@/models';

import { ButtomCounter } from '@/components';
import { CardProduct } from '@/components';

import './styles/ListProducts.css';

const ListProducts = ({ onProductChange }: onProductChangeProps) => {

	return (
		<div className='list-products'>
			{
				apiMenu.hamburger.map((product: any) => (
					<CardProduct key={product.id} product={product} onChange={onProductChange}>
						<img className='rounded-lg h-[140px]' src={product.image} alt={product.name} />
						<p className='truncate mt-2 '>{product.name}</p>
						<div className='flex justify-between items-end relative py-4'>
							<p className='text-primary text-lg font-bold leading-[18px]'>$ {product.price}</p>
							<p className='text-lead-cuztse text-sm font-bold leading-[18px]'>{product.items} items</p>
						</div>
						<ButtomCounter />
					</CardProduct>
				))
			}
		</div>
	)
}

export default ListProducts