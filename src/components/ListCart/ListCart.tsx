import { ProductInCart } from "@/models"

import './styles/ListCart.css';

const ListCart = ({ carrito }: { [key: string]: ProductInCart | {} }) => {
	return (
		<div className='space-y-5'>
			{Object.entries(carrito)?.length == 0 ? (<p>Vacio</p>) : (
				Object.entries(carrito)?.map(([key, carrito]) => (
					<div key={key} className='flex bg-light-black p-3 rounded-lg space-x-4'>
						<img className='rounded-lg w-[100px] h-[80px]' src={carrito.image} alt={carrito.name} />
						<div className='flex flex-col justify-between basis-[60%]'>
							<p>{carrito.name}</p>
							<div className='flex justify-between items-end'>
								<p>{carrito.amount} unit.</p>
								<p>$ {(carrito.amount * carrito.price).toFixed(2)}</p>
							</div>
						</div>
					</div>
				))
			)}
		</div>
	)
}

export default ListCart
