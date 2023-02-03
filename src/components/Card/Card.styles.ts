import styled from 'styled-components';

export const ProductCard = styled.section`
    width: 256px;
    max-height: 378px;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 0 0 8px 8px;
    cursor: pointer;
    transition: all ease-in 0.3;
`;

export const ProductCardIllustration = styled.div`
    position: relative;
    flex-grow: 1;

    img {
        /* object-fit: contain; // */
        mix-blend-mode: multiply;
    }
`;

export const ImageOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 256px;
    height: 250px;
    background: rgba(255, 255, 255, 0.05);
`;
export const ProductCardDetails = styled.div`
    height: 100%;
    padding: 0 12px 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #41414D;
`;

export const ProductCardDetailsName = styled.div`
    padding: 8px 0;
    border-bottom: 1px solid #DCE2E6;
    font-size: 16px;
    font-weight: 300;
`;

export const ProductCardDetailsPrice = styled.div`
    padding: 8px 0;
    font-size: 14px;
    font-weight: 600;
`;