import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [order, setOrder] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const removeForFavorite = (id) => {
    setFavorite((prevFavorite) =>
      prevFavorite.filter((item) => item.id !== id)
    );
  };

  const handleBuyClick = (card) => {
    setOrder((prevOrder) => [...prevOrder, card]);
  };
  const handleFavoriteClick = (card) => {
    setFavorite((prevFavorite) => [...prevFavorite, card]);
  };

  return (
    <DataContext.Provider
      value={{
        id: selectedCardId,
        order,
        favorite,
        isFavorite,
         setIsFavorite,
        setFavorite,
        setOrder,
        setSelectedCardId,
        handleBuyClick,
        handleFavoriteClick, 
        removeForFavorite
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
