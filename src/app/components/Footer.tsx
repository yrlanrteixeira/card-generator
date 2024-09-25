import React from 'react';
import '@/app/styles/Footer.css';

const FooterComponent: React.FC = () => {
  return (
    <footer>
      <div className="footer-container">
        <p>
          Política de Privacidade © {new Date().getFullYear()} Resultados Digitais
        </p>
      </div>
    </footer>
  );
}

export default FooterComponent;
