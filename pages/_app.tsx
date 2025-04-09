import { Provider } from 'react-redux';
import { store } from '../store';
import Layout from '../components/Layout';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import ProtectedRoute from '../components/ProtectedRoute';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isPublicPage = ['/login', '/inscription'].includes(router.pathname);

  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Portfolio professionnel" />
          <title>Mon Portfolio</title>
        </Head>
        <Layout>
          {isPublicPage ? (
            <Component {...pageProps} />
          ) : (
            <ProtectedRoute>
              <Component {...pageProps} />
            </ProtectedRoute>
          )}
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
