import React from "react";
import { LinkRoute } from "../../components/LinkRoute/LinkRoute";
import {
  Header,
  SpanStyle,
  PageStyle,
  HeaderLiStyle,
} from "./PaymentDelivery.style";

export const PaymentDelivery = () => {
  return (
    <>
      <LinkRoute children={"Оплата доставка"} />
      <Header>ОПЛАТА І ДОСТАВКА</Header>
      <ol style={{ marginBottom: "50px" }}>
        <li>
          <HeaderLiStyle>
            Умови оплати і доставки для роздрібних покупців
          </HeaderLiStyle>
          <HeaderLiStyle>Доставка</HeaderLiStyle>
          <ol>
            <li>
              <SpanStyle>
                Доставка до відділення пошти або за вказаною вами адресою:
              </SpanStyle>
              <PageStyle>
                Актуальний статус роботи відділень Нової пошти: cписок
                відділень. За умови наявності товару відправка здійснюється
                протягом 1-3 робочих днів. Якщо товар знаходиться на
                передзамовленні, очікуваний термін відправки становить 5-14
                робочих днів. В ціну продукції не включено вартість доставки та
                пакувальних матеріалів служб поштового зв'язку. Відправка
                здійснюється лише в робочі дні.
              </PageStyle>
            </li>
            <li>
              <SpanStyle>Самовивіз із магазинів PlusMinus:</SpanStyle>
              <PageStyle>
                Якщо ви оформлюєте замовлення зі способом доставки «самовивіз з
                магазину» в межах робочого графіку обраного магазину, і за
                умови, що товар є у вільному залишку – ви можете вирушати за
                замовленням відразу після отримання смс, що ваше замовлення
                готове до видачі. Якщо необхідного товару немає в наявності - ми
                доставимо його для вас у магазин (очікуваний термін доставки:
                3-5 роб. днів без урахування часу на виробництво). Здійснюючи
                самовивіз з магазину Harvest - доставка і пакування є абсолютно
                безкоштовними.
              </PageStyle>
            </li>
          </ol>
        </li>
        <HeaderLiStyle>Оплата</HeaderLiStyle>
        <PageStyle>
          Здійснюється безпосередньо на сайті через платіжну систему або при
          отриманні. ВАЖЛИВО! Якщо у Вас на момент покупки буде недостатня сума
          коштів на рахунку – виберіть спосіб оплати «по реквізитам», щоб
          виконати оплату в терміналі банку.
        </PageStyle>
        <li>
          <HeaderLiStyle>
            Умови оплати і доставки для корпоративних та оптових покупців
          </HeaderLiStyle>
          <ol>
            <li>
              <SpanStyle>
                Доставка до відділення пошти або за вказаною вами адресою:
              </SpanStyle>
              <PageStyle>
                Актуальний статус роботи відділень Нової пошти: cписок
                відділень. Дата відправки товару погоджується індивідуально з
                Вашим менеджером. Термін по відшиву продукції погоджується
                індивідуально з Вашим менеджером. В ціну продукції не включено
                вартість доставки та пакувальних матеріалів служб поштового
                зв'язку. Відправка здійснюється лише в робочі дні.
              </PageStyle>
            </li>
            <li>
              <SpanStyle>Самовивіз зі складу:</SpanStyle>
              <PageStyle>
                Якщо ви оформляєте корпоративне чи оптове замовлення зі способом
                доставки «самовивіз зі складу» , забрати товар Ви можете в межах
                робочого графіку складу, по дзвінку вашого менеджера.
              </PageStyle>
            </li>
          </ol>
        </li>
      </ol>
    </>
  );
};