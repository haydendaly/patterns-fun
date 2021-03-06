import { AppProps } from 'next/app';
import '@/styles/global.css';
import '@/styles/menu.css';
import '@/styles/typography.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
