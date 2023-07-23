import React, { createContext, useState, useEffect } from "react";
import { fetchProductCards } from "../../Utils/api/getCard";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [order, setOrder] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [compared, setCompared] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [, setStatus] = useState("pending");
  const [data, setData] = useState(null);
  const [uniqueCategories, setUniqueCategories] = useState([]);

useEffect(() => {
    (async () => {
      try {
        setStatus("pending");
        const fetchedData = await fetchProductCards();
        setStatus("fulfilled");
        setData(fetchedData);
      } catch (error) {
        setStatus("rejected");
      }
    })();
  }, []);
  
  useEffect(() => {
    if (data && data.length > 0) {
      const categoryNames = data.map((item) => item.categoryName);
      const uniqueNames = Array.from(new Set(categoryNames));
      setUniqueCategories(uniqueNames);
    }
  }, [data]);
  const removeForFavorite = (id) => {
    setFavorite((prevFavorite) =>
      prevFavorite.filter((item) => item.id !== id)
    );
  };
  const removeForCompared = (id) => {
    setCompared((prevCompared) =>
      prevCompared.filter((item) => item.id !== id)
    );
  };
  const handleBuyClick = (card) => {
    setOrder((prevOrder) => [...prevOrder, card]);
  };
  const handleFavoriteClick = (card) => {
    setFavorite((prevFavorite) => [...prevFavorite, card]);
  };
  const handleComparedClick = (card) => {
    setCompared((prevCompared) => [...prevCompared, card]);
  };

  return (
    <DataContext.Provider
      value={{
        id: selectedCardId,
        order,
        favorite,
        isFavorite,
        compared, 
        data, 
        uniqueCategories,
        setData,
        setCompared,
         setIsFavorite,
        setFavorite,
        setOrder,
        setSelectedCardId,
        handleBuyClick,
        handleFavoriteClick, 
        handleComparedClick,
        removeForFavorite,
        removeForCompared
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
