import React, { useContext } from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Wrapper } from "./SharedLayout.style";
import { FavoriteLengthProvider } from "../components/Context/FavoriteLengthContext";
import { DataContext } from "../components/Context/DataContext";
import { Hooter } from "../components/Hooter/Hooter";

export const SharedLayout = () => {
  const { uniqueCategories } = useContext(DataContext);
  
  return (
    <FavoriteLengthProvider>
      <Wrapper>
        <Header />
        <Suspense>
          <Outlet />
        </Suspense>
      </Wrapper>
      <Hooter uniqueCategories={uniqueCategories} />
    </FavoriteLengthProvider>
  );
};
