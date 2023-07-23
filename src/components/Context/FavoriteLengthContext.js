import React, { createContext, useState } from "react";

export const FavoriteLengthContext = createContext();

export const FavoriteLengthProvider = ({ children }) => {
  const [favoriteLength, setFavoriteLength] = useState(0);
  const [comparedLength, setComparedLength] = useState(0);

  return (
    <FavoriteLengthContext.Provider
      value={{ favoriteLength, comparedLength, setComparedLength, setFavoriteLength }}
    >
      {children}
    </FavoriteLengthContext.Provider>
  );
};
