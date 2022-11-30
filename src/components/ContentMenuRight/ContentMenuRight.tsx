import { getIGV, getSubTotal, getTotal } from '@/helpers';
import { ProductInCart } from '@/models';

import { ListCart } from '@/components';
import { ButtomIconText } from '@/components';
import { IconPrint } from '@/components';

import './styles/ContentMenuRight.css';

export interface ContentMenuRightInterface { }

const ContentMenuRight = ({ carrito }: { [key: string]: ProductInCart | {} }) => {

  return (
    <div className='content-menu__right '>
      <div>
        <h2>Order</h2>
        <div className='mt-2 overflow-y-auto h-[420px] rounded-lg'>
          <ListCart carrito={carrito} />
        </div>
      </div>

      <div className='resumen-cart'>
        <div className='flex'>
          <div className='basis-2/4 space-y-5'>
            <p>Sub Total</p>
            <p>IGV (18%)</p>
            <div className='hr-style'></div>
            <p>Total</p>
          </div>
          <div className='flex flex-col basis-2/4 space-y-5'>
            <p className='self-end'>$ {getSubTotal(carrito)}</p>
            <p className='self-end'>$ {getIGV(carrito)}</p>
            <div className='hr-style'></div>
            <p className='self-end'>$ {getTotal(carrito)}</p>
          </div>
        </div>
        <ButtomIconText text='Generate Ticket' icon={<IconPrint />} style='btn-print' />
      </div>
    </div>
  )
}

export default ContentMenuRight