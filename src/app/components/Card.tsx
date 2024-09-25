import React from 'react';
import Image from 'next/image';

import logo from '@/app/assets/symbol-rd-station-default.svg';

interface CardComponentProps {
  name?: string;
  phone?: string;
  email?: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ name, phone, email }) => {
  return (
    <div className="result-card">
      <div className="card-content">
        <Image
          src={logo}
          alt="Logo"
          width={60}
          height={60}
        />
        <div className="divider-vertical" />
        <div className="user-info">
          <h2>{name || 'Nome e Sobrenome'}</h2>
          <p>{phone || '(00) 0000-0000'}</p>
          <p>{email || 'meuemail@email.com'}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;