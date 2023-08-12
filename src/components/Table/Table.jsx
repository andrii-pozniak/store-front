import React from "react";
import { TrStyle, TdStyle, TableStyle, ThStyle, Button } from "./Table.Style";
import { useState } from "react";
import { ModalSample } from "../Modal/Modal";
import { ItemModal } from "../Modal/ItemModal";

export const Table = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    document.body.style.overflow = "";
  };

  const onToggleModal = () => {
    toggleModal();
  };
  return (
    <>
      <TableStyle>
        <TrStyle>
          <ThStyle width={"5%"}>№</ThStyle>
          <ThStyle width={"18%"}>
            ОБСТАВИНИ ОБМІНУ / ПОВЕРНЕННЯ / РЕМОНТУ
          </ThStyle>
          <ThStyle width={"20%"}>
            ТЕРМІН, ПРОТЯГОМ ЯКОГО ЗДІЙСНЮЄТЬСЯ ОБМІН / ПОВЕРНЕННЯ / РЕМОНТ
          </ThStyle>
          <ThStyle>ТИП ОБМІНУ / ПОВЕРНЕННЯ / РЕМОНТУ</ThStyle>
          <ThStyle width={"15%"}>ПЛАТНИК ДОСТАВКИ</ThStyle>
          <ThStyle width={"18%"}>ПОКРОКОВА ІНСТРУКЦІЯ</ThStyle>
        </TrStyle>
        <TrStyle>
          <TdStyle>1</TdStyle>
          <TdStyle>
            <p>Не сподобався товар, хочу повернути.</p>
            <img
              src="https://harvest-clothing.com.ua/image/easy-return.png"
              alt="нова пошта"
              style={{ width: "50%" }}
            />
          </TdStyle>
          <TdStyle>До 14 днів</TdStyle>
          <TdStyle>Повернення товару належної якості</TdStyle>
          <TdStyle>Покупець</TdStyle>

          <TdStyle>
            <Button type="button"  onClick={onToggleModal}>
              Відкрити інструкцію
            </Button>
          </TdStyle>
        </TrStyle>
        <TrStyle>
          <TdStyle>2</TdStyle>
          <TdStyle>
            <p>Я отримав/ла товар з виробничим дефектом.</p>
            <img
              src="https://harvest-clothing.com.ua/image/easy-return.png"
              alt="нова пошта"
              style={{ width: "50%" }}
            />
          </TdStyle>
          <TdStyle>До 14 днів</TdStyle>
          <TdStyle>
            <p>Обмін товару НЕналежної якості</p>
          </TdStyle>
          <TdStyle>Продавець</TdStyle>
          <TdStyle>
            <Button type="button" onClick={onToggleModal}>Відкрити інструкцію</Button>
          </TdStyle>
        </TrStyle>
        <TrStyle>
          <TdStyle>3</TdStyle>
          <TdStyle>
            <p>Отримано не той товар, який було замовлено.</p>
            <img
              src="https://harvest-clothing.com.ua/image/easy-return.png"
              alt="нова пошта"
              style={{ width: "50%" }}
            />
          </TdStyle>
          <TdStyle>До 14 днів</TdStyle>
          <TdStyle>Обмін помилково доставленого товару належної якості</TdStyle>
          <TdStyle>Продавець</TdStyle>
          <TdStyle>
            <Button type="button" onClick={onToggleModal}>Відкрити інструкцію</Button>
          </TdStyle>
        </TrStyle>
      </TableStyle>
      {showModal && (
        <ModalSample toggleModal={toggleModal}>
          <ItemModal />
        </ModalSample>
      )}
    </>
  );
};
