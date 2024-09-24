import './globals.css';
import HeaderComponent from './components/HeaderComponent';
import { Nunito_Sans, Darker_Grotesque } from 'next/font/google';

const nunitoSans = Nunito_Sans({ subsets: ['latin'] });
const darkerGrotesque = Darker_Grotesque({ subsets: ['latin'] });

export const metadata = {
  title: 'Gerador de Cartão de Visita',
  description: 'Crie seu cartão de visita digital de maneira rápida e fácil.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}