import { FC, useMemo } from 'react';
import Image from 'next/image';

import { TProductCard } from './types';
import * as S from './Card.styles';

export const Card = ({ id, name, description, image_url,price_in_cents }: TProductCard): JSX.Element => {
    return (
        <S.ProductCard>
            <S.ProductCardIllustration>
                <Image 
                    alt='product image' 
                    src={image_url} 
                    width={256} 
                    height={250}
                    placeholder="blur"
                    blurDataURL={image_url}
                />
                <S.ImageOverlay />
            </S.ProductCardIllustration>
            <S.ProductCardDetails>
                <S.ProductCardDetailsName>
                    {name}
                </S.ProductCardDetailsName>
                <S.ProductCardDetailsPrice>
                    {`R$ ${price_in_cents}`}
                </S.ProductCardDetailsPrice>
            </S.ProductCardDetails>
        </S.ProductCard>
    )
}

export default Card;