import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Wrapper } from "./SharedLayout.style";


export const SharedLayout = () => {
  return (
    <Wrapper>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
     
    </Wrapper>
  );
};
