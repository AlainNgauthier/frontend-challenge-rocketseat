import { GetServerSideProps } from 'next';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_ALL_PRODUCTS } from '@graphql/product.queries';
import Card from '@components/Card';
import { TProductCard } from '@components/Card/types';

import * as S from '@styles/Home.styles';

// const PRODUCT_PER_PAGE = 12;

type TPage = {
  title: string;
  description?: string;
}

export const getServerSideProps: GetServerSideProps<{ pageData: TPage }> = async (context) => {
  const pageData: TPage = {
    title: 'Rocketseat Challenge',
    description: 'Frontend Test'
  }

  return {
    props: {
      pageData,
    },
  }
}

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
  
  if (loading) return <p>Loading...</p>;

  return (
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
  )
}
