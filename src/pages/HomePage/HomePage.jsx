import { CardsProducts } from "../../components/CardsProduct/CardsProduct";
import { Hero } from "../../components/Header/Hero/Hero";
import { TradeMark } from "../../components/TradeMark/TradeMark";
import { Hooter } from "../../components/Hooter/Hooter";
import { Outlet } from "react-router";

const HomePage = () => {
  return (
    <>
      <div>
        <Hero />
        <TradeMark />
        <CardsProducts />
      </div>

      <Hooter />
      <Outlet />
    </>
  );
};

export default HomePage;
