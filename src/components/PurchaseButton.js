import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:disabled {
    background-color: ${props => props.theme.colors.secondary};
    cursor: not-allowed;
  }
`;

function PurchaseButton({ product, onClick }) {
  return (
    <Button 
      onClick={onClick} 
      disabled={product.quantity === 0}
    >
      {product.quantity > 0 ? '구매하기' : '품절'}
    </Button>
  );
}

export default PurchaseButton;