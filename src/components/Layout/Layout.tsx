import { ContentMenu } from '../ContentMenu';
import { Header } from '../Header';
import './styles/Layout.css';
export interface LayoutInterface { }

const Layout = () => {
  return (
    <div className='flex'>
      <Header />
      <ContentMenu />
    </div>
  )
}

export default Layout
