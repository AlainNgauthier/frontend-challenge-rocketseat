import Head from 'next/head';
import { Inter } from '@next/font/google'
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import * as S from '@/styles/Home.styles';
import { GET_ALL_PRODUCTS } from '../../services/graphql/product.queries';
import Card from '@/components/Card';
import { TProductCard } from '@/components/Card/types';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);

  const { loading, error, data: dataProducts } = useQuery(GET_ALL_PRODUCTS, {
    ssr: false,
    onCompleted: () => {
      if (error) console.error(error);
    }
  });

  useEffect(() => {
    if (dataProducts) setAllProducts(dataProducts.allProducts)
  }, [dataProducts]);

  useEffect(() => {
    console.log(allProducts);
  }, [allProducts]);
  
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>Rocketseat Challenge</title>
        <meta name="description" content="E-commerce Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.ProductArea>
        {allProducts?.map((item: TProductCard) => (
          <Card 
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            image_url={item.image_url}
            price_in_cents={item.price_in_cents}
          />
        ))}
      </S.ProductArea>
    </>
  )
}
