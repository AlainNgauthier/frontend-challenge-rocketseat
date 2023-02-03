import Header from '@/components/Header';

export const Layout = ({...props}): JSX.Element => {
    const { children } = props;
    return (
        <>
            <Header/>
            {children}
        </>
    );
}

export default Layout;