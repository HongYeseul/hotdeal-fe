import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const ProductDetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

function ProductDetail() {
  const { id } = useParams();

  return (
    <ProductDetailContainer>
      <h1>상품 상세 정보</h1>
      <p>상품 ID: {id}</p>
      {/* 여기에 상품 상세 정보를 표시하는 로직을 추가하세요 */}
    </ProductDetailContainer>
  );
}

export default ProductDetail;