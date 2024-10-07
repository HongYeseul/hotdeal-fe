import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2023 한정 수량 인기 상품 구매 서비스. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;