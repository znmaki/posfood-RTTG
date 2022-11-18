import './styles/ContentMenu.css';
import { getDate } from '../../helpers';
import { ButtomWithIcon } from '../Buttom/Buttom';
import ImgBurguer from '../../assets/burger.png'
import ImgNoodles from '../../assets/noodles.png'
import ImgDrink from '../../assets/drinks.png'
import ImgDessert from '../../assets/desserts.png'

import { useContext, useState } from 'react';
import { ProductContext } from '../CardMenu/CardMenu';

import apiMenu from '../../data/api.json'
import CardMenu from '../CardMenu/CardMenu';
import BtnPrueba from '../BtnPrueba';
import { IProductCart } from '../../models';

const ContentMenu = () => {
  const [carrito, setCarrito] = useState<IProductCart[] | undefined>([])

  return (
    <div className='content-menu'>
      <div className='content-menu__left'>
        <h1>Pakecho Restaurant</h1>
        <input type="text" placeholder='Search menu here...' />
        <p>{getDate()}</p>
        <div className='flex justify-between'>
          <ButtomWithIcon title='Burger' imageSrc={ImgBurguer} imageAlt='Burger Image' />
          <ButtomWithIcon title='Noodles' imageSrc={ImgNoodles} imageAlt='Noodles Image' />
          <ButtomWithIcon title='Drinks' imageSrc={ImgDrink} imageAlt='Drinks Image' />
          <ButtomWithIcon title='Desserts' imageSrc={ImgDessert} imageAlt='Desserts Image' />
        </div>
        <div className='mt-6 grid 2xl:grid-cols-4 grid-cols-2 gap-4 lg:grid-cols-3'>
          {
            apiMenu.hamburger.map(burger => (
              <CardMenu key={burger.name} product={burger}>
                <img className='rounded-lg w-[300px] h-[150px]' src={burger.image} alt={burger.name} />
                <p className='truncate mt-2 pb-4'>{burger.name}</p>
                <div className='flex justify-between items-end relative'>
                  <p className='text-primary text-lg font-bold leading-[18px]'>$ {burger.price}</p>
                  <p className='text-lead-cuztse text-sm font-bold leading-[18px]'>{burger.items} items</p>
                </div>
                {/* <div>
                  <button onClick={() => increaseBy(-1)}>-</button>
                  <div>{counter}</div>
                  <button onClick={() => increaseBy(+1)}>+</button>
                </div> */}
                <BtnPrueba productBtn={burger} setCarrito={setCarrito} carrito={carrito} />
              </CardMenu>
            ))
          }
        </div>


        {/* {apiMenu.hamburger.map(burger => (
            <div key={burger.name} className='bg-light-black flex flex-col p-6 rounded-lg relative add-cart'>
              <img className='rounded-lg w-[300px] h-[150px]' src={burger.image} alt={burger.name} />
              <p className='truncate mt-2 pb-4'>{burger.name}</p>
              <div className='flex justify-between items-end relative'>
                <p className='text-primary text-lg font-bold leading-[18px]'>$ {burger.price}</p>
                <p className='text-lead-cuztse text-sm font-bold leading-[18px]'>{burger.items} items</p>
              </div>
              <div>
                <button onClick={() => increaseBy(-1)}>-</button>
                <div>{counter}</div>
                <button onClick={() => increaseBy(+1)}>+</button>
              </div>
            </div>
          ))} */}
      </div>
      <div className='content-menu__right'>
        <h2>Order</h2>
        {carrito?.length == 0 ? (<p>Vacio</p>) : (
          carrito?.map(carrito => (
            <p>{carrito.name} {carrito.amountP}</p>
          ))
        )}
      </div>
    </div>
  )
}

export default ContentMenu