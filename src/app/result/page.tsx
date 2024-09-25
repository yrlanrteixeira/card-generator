'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

import '@/app/styles/ResultPage.css';

import ButtonComponent from '../components/Button';
import CardComponent from '../components/Card';

export default function ResultPage() {
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
            <CardComponent
              name={name ?? ''}
              phone={phone ?? ''}
              email={email ?? ''}
            />
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

