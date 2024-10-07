import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

const FilterButton = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  background-color: ${props => props.active ? props.theme.colors.primary : 'white'};
  color: ${props => props.active ? 'white' : props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  cursor: pointer;
`;

function CategoryFilter({ categories = [], activeCategory, onCategoryChange }) {
  return (
    <FilterContainer>
      {categories.map(category => (
        <FilterButton
          key={category}
          active={category === activeCategory}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </FilterButton>
      ))}
    </FilterContainer>
  );
}

export default CategoryFilter;