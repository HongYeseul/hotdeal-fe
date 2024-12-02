import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import CurrentTime from './CurrentTime';
import { useAuth } from '../contexts/AuthContext';
import { logout } from '../services/api';

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
  cursor: pointer;
`;

const UserInfo = styled.div`
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UserName = styled.span`
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
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

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.danger};
  cursor: pointer;
  padding: 0.5rem;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const CenteredTime = styled.div`
  display: flex;
  justify-content: center;
`;

function Header() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleLogout = async (e) => {
    try {
      await logout();
      setUser(null);
      navigate('/');
    } catch (error) {
      console.error('로그아웃 실패:', error);
      alert('로그아웃에 실패했습니다.');
    }
    
  };

  return (
    <HeaderContainer>
      <Logo onClick={handleLogoClick}>한정 수량 인기 상품 구매 서비스</Logo>

      <CenteredTime>
        <CurrentTime />
      </CenteredTime>

      {user ? (
        <UserInfo>
          <UserName>{user.name}님</UserName>
          <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
        </UserInfo>
      ) : (
        <LoginButton to="/login">로그인</LoginButton>
      )}
    </HeaderContainer>
  );
}

export default Header;