import { ShoppingBasket } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ListItemTotal } from "./Basket.style";
import { BasketItem } from "../Basket/BasketItem";
import React from "react";

export const Basket = ({ cartOpen, closeCart, order, removeForOrder }) => {
  const getTotalPrice = () => {
    let totalPrice = 0;
    order.forEach((item) => {
      totalPrice += item.priceProduct;
    });

    return totalPrice;
  };
  return (
    <Drawer anchor="right" open={cartOpen} onClose={closeCart}>
      <List sx={{ width: "300px" }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary="Корзина" />
        </ListItem>
        <Divider />
        {!order.length ? (
          <ListItem>Корзина пуста</ListItem>
        ) : (
          <>
            {order?.map((item) => (
              <BasketItem
                key={item.name}
                removeForOrder={removeForOrder}
                {...item}
              />
            ))}
            <Divider />
            <ListItemTotal>Загальна цiна: {getTotalPrice()} грн</ListItemTotal>
          </>
        )}
      </List>
    </Drawer>
  );
};
