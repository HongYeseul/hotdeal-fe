import React from 'react';
import styled from 'styled-components';

const CheckoutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

function Checkout() {
  return (
    <CheckoutContainer>
      <h1>결제</h1>
      {/* 여기에 결제 폼을 추가하세요 */}
    </CheckoutContainer>
  );
}

export default Checkout;