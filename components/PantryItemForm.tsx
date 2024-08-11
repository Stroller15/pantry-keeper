import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { PantryItem } from '../types/PantryItem';

interface PantryItemFormProps {
  item?: PantryItem;
  onSubmit: () => void;
}

const PantryItemForm: React.FC<PantryItemFormProps> = ({ item, onSubmit }) => {
  const [name, setName] = useState(item?.name || '');
  const [quantity, setQuantity] = useState(item?.quantity.toString() || '');
  const [unit, setUnit] = useState(item?.unit || '');
  const [expirationDate, setExpirationDate] = useState(item?.expirationDate || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const itemData = {
      name,
      quantity: parseInt(quantity),
      unit,
      expirationDate,
    };

    if (item) {
      await updateDoc(doc(db, 'pantryItems', item.id), itemData);
    } else {
      await addDoc(collection(db, 'pantryItems'), itemData);
    }

    onSubmit();
    setName('');
    setQuantity('');
    setUnit('');
    setExpirationDate('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Quantity"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <TextField
        label="Unit"
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        required
      />
      <TextField
        label="Expiration Date"
        type="date"
        value={expirationDate}
        onChange={(e) => setExpirationDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
        required
      />
      <Button type="submit" variant="contained">
        {item ? 'Update Item' : 'Add Item'}
      </Button>
    </Box>
  );
};

export default PantryItemForm;