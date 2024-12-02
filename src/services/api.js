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

export const register = async (email, name, password) => {
  try {
    console.log('API 호출 시작:', `${API_BASE_URL}/member/register`);
    console.log('요청 데이터:', { email, name, rawPassword: password });
    const response = await axios.post(`${API_BASE_URL}/member/register`, {
      email,
      name,
      rawPassword: password
    });
    console.log('회원가입 응답:', response.data);
    return response.data;
  } catch (error) {
    console.error('회원가입 에러:', error.response?.data || error.message);
    throw error;
  }
};

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'accept': '*/*'
  }
});

export const login = async (loginId, password) => {
  try {
    const response = await api.post('/login', { loginId, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    await api.post('/logout');
  } catch (error) {
    throw error;
  }
}

export const getMemberInfo = async () => {
  try {
    const response = await api.get('/member');
    return response.data;
  } catch (error) {
    console.error('회원 정보 조회 실패:', error);
    throw error;
  }
};