import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductList from '../components/ProductList';
import CategoryFilter from '../components/CategoryFilter';
import SearchBar from '../components/SearchBar';
import { fetchProducts } from '../services/api';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState(['all']);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data);
      const uniqueCategories = ['all', ...new Set(data.map(product => product.category || '기타'))];
      setCategories(uniqueCategories);
    };
    loadProducts();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  const handleSearch = (searchTerm) => {
    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <HomeContainer>
      <h1>인기 한정 상품</h1>
      <CategoryFilter 
        categories={categories} 
        activeCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange} 
      />
      <SearchBar onSearch={handleSearch} />
      <ProductList products={filteredProducts} />
    </HomeContainer>
  );
}

export default Home;