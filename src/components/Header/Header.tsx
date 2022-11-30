import { useContext } from 'react';
import { NavLink } from 'react-router-dom'

import { IconBurgerSoda, IconHistory, IconHome, IconMenu, IconPromo, IconSetting } from '@/components';

import { ElementContext } from '../Layout/Layout';

import './styles/Header.css';

export interface HeaderInterface { }

const Header = () => {

  const { hidden } = useContext(ElementContext)

  return (
    <div className={`header ${hidden ? 'show-header' : 'hidden-header'}`}>
      <ul className='space-y-14 text-center'>
        <li>
          <div className='inline-block p-[8px] bg-primary rounded-full'><IconBurgerSoda /></div>
          <p>POSFood</p>
        </li>
        <li className='flex justify-center'><NavLink className={({ isActive }) => isActive ? 'active-btn' : 'inactive-btn'} to="/home"><IconHome style='m-auto' /> Home</NavLink></li>
        <li className='flex justify-center'><NavLink className={({ isActive }) => isActive ? 'active-btn' : 'inactive-btn'} to="/menu"><IconMenu style='m-auto' /> Menu</NavLink></li>
        <li className='flex justify-center'><NavLink className={({ isActive }) => isActive ? 'active-btn' : 'inactive-btn'} to="/history"><IconHistory style='m-auto' /> History</NavLink></li>
        <li className='flex justify-center'><NavLink className={({ isActive }) => isActive ? 'active-btn' : 'inactive-btn'} to="/promos"><IconPromo style='m-auto' /> Promos</NavLink></li>
        <li className='flex justify-center'><NavLink className={({ isActive }) => isActive ? 'active-btn' : 'inactive-btn'} to="/settings"><IconSetting style='m-auto' /> Settings</NavLink></li>
      </ul>
    </div>
  )
}

export default Header
