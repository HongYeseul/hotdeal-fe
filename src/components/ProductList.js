import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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