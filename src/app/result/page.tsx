'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

import '@/app/styles/ResultPage.css';
import logo from '@/app/assets/img.svg'

import ButtonComponent from '../components/Button';
import CardComponent from '../components/Card';

import { Suspense } from 'react';

export const dynamic = 'force-dynamic';


export default function ResultPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Content />
    </Suspense>
  );
}

function Content() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const phone = searchParams.get('phone');
  const email = searchParams.get('email');

  return (
    <div className="result-page" role="main" aria-labelledby="result-header">
      <div className="result-container">
        <div className="result-content">
          <div className="result-image-container">
            <Image
              src={logo}
              alt="Imagem do Formulário"
              className="result-image"
              width={360}
              height={360}
            />
          </div>
          <div className="result-card-wrapper">
            <div className="back-link-container">
              <Link href="/" className="back-link" aria-label="Voltar para a página de geração de cartão">
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
            <ButtonComponent label="Baixar Cartão" disabled aria-disabled="true" aria-label="Botão desativado para baixar o cartão de visita" />
            <div className="result-text">
              <Link
                href="https://app.rdstation.com.br/signup"
                className="test-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link para fazer um teste grátis no RD Station Marketing. Abre em uma nova aba"
              >
                FAZER UM TESTE GRÁTIS DO RD STATION MARKETING &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

