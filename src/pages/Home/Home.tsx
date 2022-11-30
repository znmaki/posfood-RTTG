import { ContentMenu, ContentMenuLeft, ContentMenuRight } from '@/components';

import { useCart } from '@/hooks';

import './styles/Home.css';

export interface HomeInterface { }

const Home = () => {

	const { carrito, onProductChange } = useCart()

	return (
		<ContentMenu>
			<ContentMenuLeft onProductChange={onProductChange} />
			<ContentMenuRight carrito={carrito} />
		</ContentMenu>
	)
}

export default Home