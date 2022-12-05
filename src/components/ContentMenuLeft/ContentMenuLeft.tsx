import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import { onProductChangeProps } from '@/models';
import { getDate } from '@/helpers';
import { ButtomWithImg } from '@/components';
import { ListProducts } from '@/components';

import ImgBurguer from '@/assets/burger.png'
import ImgNoodles from '@/assets/noodles.png'
import ImgDrink from '@/assets/drinks.png'
import ImgDessert from '@/assets/desserts.png'

import { ElementContext } from '../Layout/Layout';

import gsap from 'gsap';

import './styles/ContentMenuLeft.css';
import { IconClose, IconMenuBar } from '../Icons/Icons';

const ContentMenuLeft = ({ onProductChange }: onProductChangeProps) => {

  const { changeIdenti, hidden } = useContext(ElementContext)

  const handleHidden = () => {
    gsap.fromTo('.btn-collapse', { opacity: 0, rotate: 0 }, { opacity: 1, rotate: 180, ease: "bounce", duration: .5 })

    changeIdenti();
  }

  const onMouseEnterHandler = ({ currentTarget }: any) => {
    gsap.to(currentTarget, {
      scale: 1.05,
      duration: .5,
    })
  };

  const onMouseLeaveHandler = ({ currentTarget }: any) => {
    gsap.to(currentTarget, {
      scale: 1,
      duration: .5,
    })
  };

  return (
    <div className='content-menu__left'>
      <div className='head-m-left'>
        <div className='basis-1/2'>
          <h1>Pakecho Restaurant</h1>
          <p className='text-lead-cuztse text-xs'>{getDate()}</p>
          <button className='btn-collapse' onClick={handleHidden}>{hidden ? <IconClose /> : <IconMenuBar />}</button>
        </div>
        <input className='basis-1/2 text-lead-cuztse bg-light-black rounded-md px-5' type="text" placeholder='Search menu here...' />
      </div>
      <div className='nav-m-left'>
        <NavLink onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} className='prueba' to="/home/hamburger"><ButtomWithImg title='Burger' imageSrc={ImgBurguer} imageAlt='Burger Image' /></NavLink>
        <NavLink onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} className='prueba' to="/home/noodles"><ButtomWithImg title='Noodles' imageSrc={ImgNoodles} imageAlt='Noodles Image' /></NavLink>
        <NavLink onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} className='prueba' to="/home/drinks"><ButtomWithImg title='Drinks' imageSrc={ImgDrink} imageAlt='Drinks Image' /></NavLink>
        <NavLink onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} className='prueba' to="/home/desserts"><ButtomWithImg title='Desserts' imageSrc={ImgDessert} imageAlt='Desserts Image' /></NavLink>
      </div>

      <ListProducts onProductChange={onProductChange} />
    </div>
  )
}

export default ContentMenuLeft