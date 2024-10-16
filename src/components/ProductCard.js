import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PurchaseButton from './PurchaseButton';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 12px;
`;

const ProductName = styled.h3`
  margin: 8px 0;
  font-size: 1.1rem;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 8px 0;
`;

const ProductQuantity = styled.p`
  color: ${props => props.inStock ? 'green' : 'red'};
  font-size: 0.9rem;
  margin: 8px 0;
`;

const ProductOpenTime = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin: 8px 0;
`;

function ProductCard({ product }) {
  const openTime = new Date(product.openTime);
  const formattedOpenTime = openTime.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <Card>
      <Link to={`/product/${product.id}`}>
        <ProductImage 
          src={product.imageUrl || 'https://via.placeholder.com/250x200?text=No+Image'} 
          alt={product.name} 
        />
        <ProductName>{product.name}</ProductName>
      </Link>
      <ProductPrice>{product.price.toLocaleString()}원</ProductPrice>
      <ProductQuantity inStock={product.quantity > 0}>
        {product.quantity > 0 ? `재고: ${product.quantity}개` : '품절'}
      </ProductQuantity>
      <ProductOpenTime>판매 시작: {formattedOpenTime}</ProductOpenTime>
      <PurchaseButton product={product} />
    </Card>
  );
}

export default ProductCard;