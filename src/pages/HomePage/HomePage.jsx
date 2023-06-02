import { CardsProducts } from "../../components/CardsProduct/CardsProduct";
import { Hero } from "../../components/Header/Hero/Hero";
import { TradeMark } from "../../components/TradeMark/TradeMark";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TradeMark />
      <CardsProducts />
    </div>
  );
};

export default HomePage;
