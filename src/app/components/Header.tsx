import React from 'react';
import Image from 'next/image';

import '@/app/styles/Header.css';
import logo from '@/app/assets/logo-rd-station-default.svg';

const HeaderComponent: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Image
            src={logo}
            alt="Logo"
            width={150}
            height={50}
          />
        </div>
        <div>
          <h1 className="header-title">
            Gerador de Cartão de Visita
          </h1>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
