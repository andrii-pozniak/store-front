import React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Wrapper } from "./SharedLayout.style";
import { DataProvider } from "../components/Context/DataContext";
import { FavoriteLengthProvider } from "../components/Context/FavoriteLengthContext";

export const SharedLayout = () => {
  return (
    <DataProvider>
      <FavoriteLengthProvider>
      <Wrapper>
        <Header />
        <Suspense>
          <Outlet />
        </Suspense>
      </Wrapper>
      </FavoriteLengthProvider>
      
    </DataProvider>
  );
};