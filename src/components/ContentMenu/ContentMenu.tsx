import { ContentMenuProps } from '@/models';

import './styles/ContentMenu.css';

const ContentMenu = ({ children }: ContentMenuProps) => {
  return (
    <div className='content-menu'>
      {children}
    </div>
  )
}

export default ContentMenu