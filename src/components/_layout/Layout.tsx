import Head from 'next/head';
import Header from '@/components/Header';

export const Layout = ({...props}): JSX.Element => {

    console.log(props);
    
    const { 
        children,
        pageData,
    } = props;

    return (
        <>  
            <Head>
                <title>{pageData.title}</title>
                <meta content={pageData?.description} name="description" />
                <meta content="initial-scale=1.0, width=device-width" name="viewport" />
                <meta content="#5D5D6D" name="theme-color"></meta>
                {/* <meta content={robots} name="robots" /> */}

                {/* Icons */}
                <link href={`/favicon.ico`} rel="icon" sizes="16x16"></link>
                {/* Web config */}
                <link href={`favicon.ico`} rel="apple-touch-icon"></link>
            </Head>
            <Header/>
            {children}
        </>
    );
}

export default Layout;