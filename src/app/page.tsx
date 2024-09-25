import Image from 'next/image';

import img from '@/app/assets/img.svg';
import FormComponent from './components/FormComponent';

export default function HomePage() {
  return (
    <>
      <main className="form-page">
        <div className="content-header">
          <h1>Gerador de Cartão de Visita</h1>
          <p>
            Crie grátis seu cartão de visita em passos rápidos! Você o insere no Instagram e demais canais digitais.
          </p>
        </div>
        <div className="container">
          <section className="form-content" aria-labelledby="form-section">
            <div className="image-container">
              <Image
                src={img}
                alt="Ilustração de um cartão de visita digital"
                className="image"
                width={360}
                height={360}
              />
            </div>
            <div className="form-container-wrapper">
              <FormComponent />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
