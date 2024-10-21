import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../services/api';

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const SignUpLink = styled(Link)`
  text-align: center;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isRegistering) {
      try {
        await register(email, name, password);
        alert('회원가입이 완료되었습니다. 로그인해주세요.');
        setIsRegistering(false);
        navigate('/');
      } catch (error) {
        console.error('회원가입 실패:', error); 
        alert('회원가입에 실패했습니다. 다시 시도해주세요.');
      }
    } else {
      // TODO: 로그인 로직
      console.log('로그인 시도:', email, password);
    }
  };

  return (
    <LoginContainer>
      <h2>{isRegistering ? '회원가입' : '로그인'}</h2>
      <LoginForm onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {isRegistering && (
          <Input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">{isRegistering ? '가입하기' : '로그인'}</Button>
      </LoginForm>
      <SignUpLink onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? '로그인으로 돌아가기' : '회원가입'}
      </SignUpLink>
    </LoginContainer>
  );
}

export default Login;
