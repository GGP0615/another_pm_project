import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const ProductLineOverview = () =>{
  const [products, setProducts] = useState([]);
  const [metrics, setMetrics] = useState({});

  useEffect(() =>{
    fetchProducts();
  }, []);

  const fetchProducts = async () =>{
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
      fetchMetrics(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchMetrics = async (products) =>{
    // Fetch performance metrics for each product
  };

  return (
<div className=\