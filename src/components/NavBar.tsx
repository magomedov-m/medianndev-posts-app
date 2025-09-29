import React from 'react';
import ButtonGoMain from './ButtonGoMain';

interface Props {
  className?: string
}

const NavBar: React.FC<Props> = () => {
  return (
    <nav className='flex justify-around'>

        <ButtonGoMain path='/search' text='Перейти к поиску' />
    </nav>
  );
};

export default NavBar;