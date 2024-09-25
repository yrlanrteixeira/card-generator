'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Divider } from '@fluentui/react-divider';
import '@/app/styles/ResultPage.css';
import ButtonComponent from '../components/Button';
import { ChevronLeft } from 'lucide-react';

const ResultPage = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const phone = searchParams.get('phone');
  const email = searchParams.get('email');

  return (
    <div className="result-page">
      <div className="result-container">
        <div className="result-content">
          <div className="result-image-container">
            <Image
              src={require('@/app/assets/img.svg')}
              alt="Imagem do Formulário"
              className="result-image"
              width={360}
              height={360}
            />
          </div>
          <div className="result-card-wrapper">
            <div className="back-link-container">
              <Link href="/" className="back-link">
                <>
                  <ChevronLeft size={24} />
                  <span className="back-link-text">Gerar outro cartão</span>
                </>
              </Link>
            </div>
            <div className="result-card">
              <div className="card-content">
                <Image
                  src={require('@/app/assets/symbol-rd-station-default.svg')}
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
            <ButtonComponent label="Baixar Cartão" disabled />
            <div className="result-text">
              <Link href="https://www.rdstation.com/produtos/marketing/" className="test-link">
                FAZER UM TESTE GRÁTIS DO RD STATION MARKETING &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
