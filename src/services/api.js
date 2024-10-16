import axios from 'axios';

// API의 기본 URL을 설정합니다.
const API_BASE_URL = 'http://localhost:8080/api/v1';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/product`);
    return response.data.items;
  } catch (error) {
    console.error('상품을 가져오는 데 실패했습니다:', error);
    return [];
  }
};

// 다른 API 함수들을 여기에 추가할 수 있습니다.


// 임시 더미 데이터
const dummyProducts = [
    { id: 1, name: '상품 1', category: '카테고리 1', price: 10000, stock: 5 },
    { id: 2, name: '상품 2', category: '카테고리 2', price: 20000, stock: 3 },
    { id: 3, name: '상품 3', category: '카테고리 1', price: 15000, stock: 7 },
    // 더 많은 더미 데이터를 추가할 수 있습니다.
  ];
  
  // export const fetchProducts = async () => {
  //   // 실제 API 호출을 시뮬레이션하기 위해 setTimeout 사용
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(dummyProducts);
  //     }, 500);
  //   });
  // };