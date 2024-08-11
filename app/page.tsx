'use client';

import React from 'react';
import { Container, Typography } from '@mui/material';
import PantryItemList from '../components/PantryItemList';

const Home: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Pantry Manager
      </Typography>
      <PantryItemList />
    </Container>
  );
};

export default Home;