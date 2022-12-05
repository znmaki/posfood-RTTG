import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components';

import './styles/Layout.css';

import { ElementsContextProps } from '@/models';

export const ElementContext = createContext({} as ElementsContextProps)
const { Provider } = ElementContext;

const Layout = () => {
  const [hidden, setHidden] = useState(false)
  const [header, setHeader] = useState(null)

  const changeIdenti = () => {
    setHidden(!hidden)
  }

  const setHeaderElem = (element: any) => {
    setHeader(element)
  }

  return (
    <Provider value={{
      hidden,
      header,

      setHeaderElem,
      changeIdenti
    }}>
      <div className='flex'>
        <Header />

        <Outlet />
      </div>
    </Provider>
  )
}

export default Layout
