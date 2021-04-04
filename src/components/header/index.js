import React from 'react';
import { HeaderNav, LogoLink } from './header.sc';

export const Header = () => {
  return <HeaderNav className='navbar has-background-info-light' role='navigation' aria-label='main navigation'>
    <div className='container'>
      <div className='navbar-brand'>
        <LogoLink className='navbar-item has-text-info' to='/'>
        ☀️ Sunny inside
        </LogoLink>
      </div>
    </div>
  </HeaderNav>;
};