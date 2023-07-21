import React, { useState, useContext, useEffect } from "react";
import { HeaderInfo } from "./HeaderInfo/HeaderInfo";
import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import { HeaderNavMenu } from "./HeaderNavMenu/HeaderNavMenu";
import { HeaderBody } from "./Header.style";
import { Basket } from "../Basket/ Basket";
import { DataContext } from "../Context/DataContext";
import { FavoriteLengthContext } from "../Context/FavoriteLengthContext";
import { fetchCartId } from "../../Utils/api/getCard";
import { FavoriteCard } from "../Favorite/Favorite";

export const Header = () => {
  const {
    id,
    order,
    handleBuyClick,
    handleFavoriteClick,
    setOrder,
    favorite,
    removeForFavorite
  } = useContext(DataContext);

  const { favoriteLength } = useContext(FavoriteLengthContext);

  const [, setStatus] = useState("pending");
  const [data, setData] = useState(null);

  const orderLength = order.length;
  const removeForOrder = (id) => {
    setOrder((prevOrder) => prevOrder.filter((item) => item.id !== id));
  };

  
  useEffect(() => {
    if (id) {
      (async () => {
        try {
          setStatus("pending");
          const data = await fetchCartId(id);
          setStatus("fulfilled");
          setData(data);
        } catch {
          setStatus("rejected");
        }
      })();
    }
  }, [id]);

  const [isCartOpen, setCartOpen] = useState(false);
  const [isFavoriteOpen, setFavoriteOpen] = useState(false);
  return (
    <>
      <HeaderInfo />
      <HeaderBody>
        <HeaderLogo secondWordColor="#333333" colorNumber="#333333" />
        <HeaderNavMenu
          orderLength={orderLength}
          lengthFavorite={favoriteLength}
          handleCart={() => setCartOpen(true)}
          handleFavorite={() => setFavoriteOpen(true)}
        />
      </HeaderBody>
      <Basket
        data={data}
        id={id}
        order={order}
        handleBuyClick={handleBuyClick}
        removeForOrder={removeForOrder}
        cartOpen={isCartOpen}
        closeCart={() => setCartOpen(false)}
      />
      <FavoriteCard
        data={data}
        id={id}
        favorite={favorite}
        handleFavoriteClick={handleFavoriteClick} 
        removeForFavorite={removeForFavorite} 
        favoriteOpen={isFavoriteOpen}
        closeFavorite={() => setFavoriteOpen(false)}
      />
    </>
  );
};
