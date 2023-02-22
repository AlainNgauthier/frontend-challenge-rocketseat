import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

type TPage = {
    title: string;
    description?: string;
  }
  
  export const getServerSideProps: GetServerSideProps<{ pageData: TPage }> = async (context) => {
    
    const pageData: TPage = {
      title: 'Rocketseat Challenge | Product',
      description: 'Page of a product'
    }
  
    return {
      props: {
        pageData,
      },
    }
  }

export const ProductPage = () => {
    const {
		query: { id },
	} = useRouter();

    return <h1>{`Product ${id}`}</h1>
};

export default ProductPage;