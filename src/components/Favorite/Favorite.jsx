import React, { useState, useEffect, useCallback } from "react";

import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FavoriteItem } from "./FavoriteItem";
import { FavoriteBorder } from "@mui/icons-material";

export const FavoriteCard = ({
  favoriteOpen,
  closeFavorite,
  favorite,
  removeForFavorite,
}) => {
 const [newFavorite, SetNewFavorite] = useState([])

 const removeDuplicatesById = useCallback((arr) => {
  const uniqueIds = new Set();
  return arr.filter((item) => {
    if (!uniqueIds.has(item.id)) {
      uniqueIds.add(item.id);
      return true;
    }
    removeForFavorite(item.id);
    return false;
  });
}, [removeForFavorite]);

useEffect(() => {
  const uniqueFavorite = removeDuplicatesById(favorite);
  SetNewFavorite(uniqueFavorite);
}, [favorite, removeDuplicatesById]);
console.log("newFavorite", newFavorite)

  return (
    <Drawer anchor="right" open={favoriteOpen} onClose={closeFavorite}>
      <List sx={{ width: "300px" }}>
        <ListItem>
          <ListItemIcon>
            <FavoriteBorder />
          </ListItemIcon>
          <ListItemText primary="Обранi" />
        </ListItem>
        <Divider />
        {!newFavorite.length ? (
          <ListItem>Нема обраних</ListItem>
        ) : (
          newFavorite.map((item) => (
            <FavoriteItem
              key={item.name}
              removeForFavorite={removeForFavorite}
              {...item}
            />
          ))
        )}
      </List>
    </Drawer>
  );
};
