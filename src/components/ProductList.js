import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

function ProductList({ products }) {
  return (
    <ProductListContainer>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductListContainer>
  );
}

export default ProductList;