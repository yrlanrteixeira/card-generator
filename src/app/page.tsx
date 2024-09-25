import Image from 'next/image';
import FormComponent from './components/FormComponent';

export default function HomePage() {
  return (
    <>
      <div className="form-page">
        <div className="content-header">
          <h1>Gerador de Cartão de Visita</h1>
          <p>Crie grátis seu cartão de visita em passos rápidos! Você o insere no Instagram e demais canais digitais.</p>
        </div>
        <div className="container">
          <div className="form-content">
            <div className="image-container">
              <Image
                src={require('@/app/assets/img.svg')}
                alt="Imagem do Formulário"
                className='image'
                width={360}
                height={360}
              />
            </div>
            <div className="form-container-wrapper">
              <FormComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
