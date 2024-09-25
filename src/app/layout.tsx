import './globals.css';
import HeaderComponent from './components/Header';
import { Nunito_Sans, Darker_Grotesque } from 'next/font/google';
import FooterComponent from './components/Footer';

const nunitoSans = Nunito_Sans({ subsets: ['latin'], variable: '--font-nunito' });
const darkerGrotesque = Darker_Grotesque({ subsets: ['latin'], variable: '--font-darker' });

export const metadata = {
  title: 'Gerador de Cartão de Visita',
  description: 'Crie seu cartão de visita digital de maneira rápida e fácil.',
  keywords: 'cartão de visita, cartão de visita digital, gerador de cartão de visita',

  ogTitle: 'Gerador de Cartão de Visita',
  ogDescription: 'Crie seu cartão de visita digital de maneira rápida e fácil.',
  ogImage: '/og-image.png', // Valores que serão substituídos pelos valores reais
  ogType: 'website',
  ogSiteName: 'Gerador de Cartão de Visita',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Gerador de Cartão de Visita',
  twitterDescription: 'Crie seu cartão de visita digital de maneira rápida e fácil.',
  twitterImage: '/twitter-image.png', // Valores que serão substituídos pelos valores reais
  twitterSite: '@rdstation',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${nunitoSans.variable} ${darkerGrotesque.variable}`}>
      <body className="font-sans">
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
