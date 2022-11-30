import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Home } from '@/pages';

import { Layout } from '@/components';

import './styles/Navigation.css';

export interface NavigationInterface { }

const Navigation = () => {
	return (
		<BrowserRouter>
			<Routes>

				<Route path='/' element={<Navigate to='/home' replace />} />

				<Route path='/' element={<Layout />}>
					<Route path='home' element={<Home />} />
					<Route path='home/:type' element={<Home />} />
					<Route path='menu' element={<Home />} />
					<Route path='history' element={<Home />} />
					<Route path='promos' element={<Home />} />
					<Route path='settings' element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Navigation