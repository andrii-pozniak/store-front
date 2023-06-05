import { ReactComponent as BestPriceIcon } from "../Header/assest/CategoryItemImg/fire.svg";
import { ReactComponent as BestSellerIcon } from "../Header/assest/CategoryItemImg/car.svg";
import {
  HitPage,
  NewPage,
  BestPricePage,
  DeliveryPage,
  DiscountPage
} from "./CategoryItem.style";

const CategoryItem = ({ category }) => {
  console.log("first", category);
  switch (category) {
    case "Знижки":
      return <HitPage>Знижки</HitPage>;

    case "Кращі цінові пропозиції":
      return <BestPricePage>Краща ціна</BestPricePage>;
    //
    case "Хіти продаж":
      return (
        <DiscountPage>         
          <BestPriceIcon /> Хіт
        </DiscountPage>
      );
    case "Новинки":
      return <NewPage>Новинки</NewPage>;
    case "Безкоштовно":
      return (
        <DeliveryPage>
          <BestSellerIcon /> безкош товно
        </DeliveryPage>
      );

    default:
      break;
  }
};

export default CategoryItem;
