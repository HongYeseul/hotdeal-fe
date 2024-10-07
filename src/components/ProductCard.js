import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PurchaseButton from './PurchaseButton';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 250px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

const ProductName = styled.h3`
  margin: 8px 0;
`;

const ProductPrice = styled.p`
  font-weight: bold;
`;

const ProductStock = styled.p`
  color: ${props => props.inStock ? 'green' : 'red'};
`;

function ProductCard({ product }) {
  return (
    <Card>
      <Link to={`/product/${product.id}`}>
        <ProductImage src={product.image} alt={product.name} />
        <ProductName>{product.name}</ProductName>
      </Link>
      <ProductPrice>{product.price}원</ProductPrice>
      <ProductStock inStock={product.stock > 0}>
        {product.stock > 0 ? `재고: ${product.stock}개` : '품절'}
      </ProductStock>
      <PurchaseButton product={product} />
    </Card>
  );
}

export default ProductCard;