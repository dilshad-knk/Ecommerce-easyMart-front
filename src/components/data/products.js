import { useState, useEffect } from 'react';
import instance from '../../axios/axios';

const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await instance.get('/products', { withCredentials: true });
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return products;
};

export default useGetProducts;
