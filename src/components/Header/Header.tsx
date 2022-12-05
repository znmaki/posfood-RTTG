import { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom'

import { IconBurgerSoda, IconHistory, IconHome, IconMenu, IconPromo, IconSetting } from '@/components';

import { ElementContext } from '../Layout/Layout';

import './styles/Header.css';

import gsap from 'gsap';

const Header = () => {
  const { hidden, setHeaderElem } = useContext(ElementContext)

  const headerBox = useRef(null)

  let mm = gsap.matchMedia();  //variable para media query

  useLayoutEffect(() => {
    mm.add("(max-width: 800px)", () => {
      let ctx = gsap.context(() => {
        gsap
          .fromTo(headerBox.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "elastic" })
      })
      return () => ctx.revert();
    })
  }, [hidden]);

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

  useEffect(() => {
    setHeaderElem(headerBox)
  })

  return (
    <div ref={headerBox} className={`header ${hidden ? 'show-header' : 'hidden-header'}`}>
      <ul className='space-y-14 text-center'>
        <li>
          <div className='inline-block p-[8px] bg-primary rounded-full'><IconBurgerSoda /></div>
          <p>POSFood</p>
        </li>
        <li onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} className='flex justify-center'><NavLink className={({ isActive }) => isActive ? 'active-btn' : 'inactive-btn'} to="/home"><IconHome style='m-auto' /> Home</NavLink></li>
        <li onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} className='flex justify-center'><NavLink className={({ isActive }) => isActive ? 'active-btn' : 'inactive-btn'} to="/menu"><IconMenu style='m-auto' /> Menu</NavLink></li>
        <li onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} className='flex justify-center'><NavLink className={({ isActive }) => isActive ? 'active-btn' : 'inactive-btn'} to="/history"><IconHistory style='m-auto' /> History</NavLink></li>
        <li onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} className='flex justify-center'><NavLink className={({ isActive }) => isActive ? 'active-btn' : 'inactive-btn'} to="/promos"><IconPromo style='m-auto' /> Promos</NavLink></li>
        <li onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} className='flex justify-center'><NavLink className={({ isActive }) => isActive ? 'active-btn' : 'inactive-btn'} to="/settings"><IconSetting style='m-auto' /> Settings</NavLink></li>
      </ul>
    </div>
  )
}

export default Header
