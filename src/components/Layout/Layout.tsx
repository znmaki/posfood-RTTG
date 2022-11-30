import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components';

import './styles/Layout.css';

import { ElementsContextProps } from '@/models';

export const ElementContext = createContext({} as ElementsContextProps)
const { Provider } = ElementContext;

const Layout = () => {
  const [hidden, setHidden] = useState(false)

  const changeIdenti = () => {
    setHidden(!hidden)
  }

  return (
    <Provider value={{
      changeIdenti,
      hidden
    }}>
      <div className='flex'>
        <Header />

        <Outlet />
      </div>
    </Provider>
  )
}

export default Layout
