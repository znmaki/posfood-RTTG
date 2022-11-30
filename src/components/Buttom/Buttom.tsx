import { useContext } from 'react';

import { ProductContext } from '../CardProduct/CardProduct';

import './styles/Buttom.css';

interface ITitle {
	title: string;
	imageSrc?: string;
	imageAlt?: string;
}

export const ButtomWithImg = ({ title, imageSrc, imageAlt }: ITitle) => {
	return (
		<div className='btn-img'>
			<img className='max-w-[2rem] mr-2' src={imageSrc} alt={imageAlt} />
			<p>{title}</p>
		</div>
	)
}

export const ButtomCounter = () => {
	const { increaseBy, amount } = useContext(ProductContext)
	return (
		<div className='flex justify-center'>
			<button
				className={`border py-2 px-2 rounded-l-lg rounded-bl-lg bg-primary`}
				
				onClick={() => increaseBy(-1)}
			>
				-
			</button>

			<div
				className='border py-2 px-2 bg-light-black '
			>
				{amount}
			</div>

			<button
				className='border py-2 px-2 rounded-r-lg bg-primary'
				onClick={() => increaseBy(+1)}
			>
				+
			</button>
		</div>
	)
}

export const ButtomIconText = ({ text, style, icon }: { text: string; style?: string; icon?: JSX.Element }) => {
	return (
		<button
			className={`${style}`}
		>
			{icon}
			<p>{text}</p>
		</button>
	)
}