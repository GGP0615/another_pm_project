import React, { useState } from 'react';
import axios from 'axios';

const CompetitiveAnalysis = () =>{
  const [competitors, setCompetitors] = useState([]);
  const [newCompetitor, setNewCompetitor] = useState({
    name: '',
    products: [],
    marketShare: 0
  });

  const addCompetitor = async (e) =>{
    e.preventDefault();
    try {
      const response = await axios.post('/api/competitors', newCompetitor);
      setCompetitors([...competitors, response.data]);
      setNewCompetitor({ name: '', products: [], marketShare: 0 });
    } catch (error) {
      console.error('Error adding competitor:', error);
    }
  };

  return (
<div className=\