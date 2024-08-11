import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { PantryItem as PantryItemType } from '../types/PantryItem';

interface PantryItemProps {
  item: PantryItemType;
  onEdit: (item: PantryItemType) => void;
  onDelete: () => void;
}

const PantryItem: React.FC<PantryItemProps> = ({ item, onEdit, onDelete }) => {
  const handleDelete = async () => {
    await deleteDoc(doc(db, 'pantryItems', item.id));
    onDelete();
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{item.name}</Typography>
        <Typography>Quantity: {item.quantity} {item.unit}</Typography>
        <Typography>Expiration Date: {item.expirationDate}</Typography>
        <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
          <Button variant="outlined" onClick={() => onEdit(item)}>Edit</Button>
          <Button variant="outlined" color="error" onClick={handleDelete}>Delete</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PantryItem;