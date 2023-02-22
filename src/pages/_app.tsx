import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { Saira } from '@next/font/google';

import { useApollo } from '../../lib/apollo-client';
import Layout from '@/components/_layout';

const inter = Saira({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  const client = useApollo();
  

  return (
    <ApolloProvider client={client}>
      <main className={inter.className}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </main>
    </ApolloProvider>
  )
}
