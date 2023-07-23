import React, { useState, useEffect, useCallback } from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ComparedItem } from "./ComparedItem";
import { SvgHeard } from "../Header/HeaderNavMenu/HeaderNavMenu.style";

export const ComparedCard = ({
  comparedOpen,
  closeCompared,
  compared,
  removeForCompared,
}) => {
  const [newCompared, SetNewCompared] = useState([]);

  const removeDuplicatesById = useCallback(
    (arr) => {
      const uniqueIds = new Set();
      return arr.filter((item) => {
        if (!uniqueIds.has(item.id)) {
          uniqueIds.add(item.id);
          return true;
        }
        removeForCompared(item.id);
        return false;
      });
    },
    [removeForCompared]
  );

  useEffect(() => {
    const uniqueFavorite = removeDuplicatesById(compared);
    SetNewCompared(uniqueFavorite);
  }, [compared, removeDuplicatesById]);

  return (
    <Drawer anchor="right" open={comparedOpen} onClose={closeCompared}>
      <List sx={{ width: "300px" }}>
        <ListItem>
          <ListItemIcon>
            <SvgHeard />
          </ListItemIcon>
          <ListItemText primary="Порівняти" />
        </ListItem>
        <Divider />
        {!newCompared.length ? (
          <ListItem>Нема обраних</ListItem>
        ) : (
          newCompared.map((item) => (
            <ComparedItem
              key={item.name}
              removeForCompared={removeForCompared}
              {...item}
            />
          ))
        )}
      </List>
    </Drawer>
  );
};
