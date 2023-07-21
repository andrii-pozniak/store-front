import { Close } from "@mui/icons-material";
import { IconButton, ListItem } from "@mui/material";
import React from "react";
import { TypographyStyle, ImageStyle } from "../Basket/BasketItem.style";

export const FavoriteItem = ({ removeForFavorite, id, name, imageURL, priceProduct, }) => {
    return (
    <>
      <ListItem >
      <ImageStyle
          component="img"
          width="50%"
          image={imageURL}
          alt={name} 
        />
        <TypographyStyle 
        variant="body1">
            {name} 
            price {priceProduct} грн
            
        </TypographyStyle>
        <IconButton onClick={() => removeForFavorite(id)}>
            <Close/>
        </IconButton>
      </ListItem>
      
    </>
  );
};