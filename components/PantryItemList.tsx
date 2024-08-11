import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebase/config';
import { PantryItem as PantryItemType } from '../types/PantryItem';
import PantryItem from './PantryItem';
import PantryItemForm from './PantryItemForm';
import { Grid, TextField, Box } from '@mui/material';

const PantryItemList: React.FC = () => {
  const [items, setItems] = useState<PantryItemType[]>([]);
  const [editItem, setEditItem] = useState<PantryItemType | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'pantryItems'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const pantryItems: PantryItemType[] = [];
      querySnapshot.forEach((doc) => {
        pantryItems.push({ id: doc.id, ...doc.data() } as PantryItemType);
      });
      setItems(pantryItems);
    });

    return () => unsubscribe();
  }, []);

  const handleEdit = (item: PantryItemType) => {
    setEditItem(item);
  };

  const handleSubmit = () => {
    setEditItem(undefined);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', padding: 2 }}>
      <TextField
        label="Search items"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 2 }}
      />
      <PantryItemForm item={editItem} onSubmit={handleSubmit} />
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {filteredItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <PantryItem
              item={item}
              onEdit={handleEdit}
              onDelete={() => {}}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PantryItemList;