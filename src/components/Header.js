import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CurrentTime from './CurrentTime';


const HeaderContainer = styled.header`
  background-color: #f8f9fa;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const LoginButton = styled(Link)`
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  justify-self: end;

  &:hover {
    background-color: #0056b3;
  }
`;

const CenteredTime = styled.div`
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>한정 수량 인기 상품 구매 서비스</Logo>

      <CenteredTime>
        <CurrentTime/>
      </CenteredTime>

      <LoginButton to="/login">로그인</LoginButton>
    </HeaderContainer>
  );
}

export default Header;