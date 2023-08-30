import React, { useState, useContext, useEffect } from "react";
import { HeaderInfo } from "./HeaderInfo/HeaderInfo";
import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import { HeaderNavMenu } from "./HeaderNavMenu/HeaderNavMenu";
import { HeaderBody } from "./Header.style";
import { Basket } from "../Basket/ Basket";
import { DataContext } from "../Context/DataContext";
import { FavoriteLengthContext } from "../Context/FavoriteLengthContext";
import { fetchCartId } from "../../Utils/api/getCard";
import { FavoriteCard } from "../Favorite/Favorite";
import { ComparedCard } from "../Compared/Compared";

export const Header = () => {
  const {
    id,
    order,
    handleBuyClick,
    handleFavoriteClick,
    handleComparedClick,
    setOrder,
    favorite,
    compared,
    removeForFavorite,
    removeForCompared
  } = useContext(DataContext);

  const { favoriteLength, comparedLength } = useContext(FavoriteLengthContext);

  const [, setStatus] = useState("pending");
  const [data, setData] = useState(null);
  const[openMenu, SetOpenMenu] = useState(false);

  const toggleMenu = () => {
    SetOpenMenu(!openMenu)
  }

  const handleMenu = () => {
    toggleMenu()
  }

  const orderLength = order.length;
  const removeForOrder = (id) => {
    setOrder((prevOrder) => prevOrder.filter((item) => item.id !== id));
  };

  
  useEffect(() => {
    if (id) {
      (async () => {
        try {
          setStatus("pending");
          const data = await fetchCartId(id);
          setStatus("fulfilled");
          setData(data);
        } catch {
          setStatus("rejected");
        }
      })();
    }
  }, [id]);
  useEffect(() => {
    if(openMenu){
      document.body.style.overflow = "hidden";
    }
    if(!openMenu){
      document.body.style.overflow = "";
    }
    
    const close = (e) => {
      if(e.code === 'Escape'){            
        
      }
    };
    window.addEventListener('keydown', close);
    return () => {window.removeEventListener('keydown', close)};
  }, [openMenu]);
  console.log("openMenu", openMenu)

  const [isCartOpen, setCartOpen] = useState(false);
  const [isFavoriteOpen, setFavoriteOpen] = useState(false);
  const [isComparedOpen, setComparedOpen] = useState(false);
  return (
    <>
      <HeaderInfo openMenu={openMenu}
      handleMenu={handleMenu}
      />
      <HeaderBody>
        <HeaderLogo secondWordColor="#333333" colorNumber="#333333" />
        <HeaderNavMenu
          orderLength={orderLength}
          lengthFavorite={favoriteLength}
          lengthCompared={comparedLength}
          handleCart={() => setCartOpen(true)}
          handleFavorite={() => setFavoriteOpen(true)}
          handleCompared={() => setComparedOpen(true)}
          openMenu={openMenu}
          handleMenu={handleMenu}
        />
      </HeaderBody>
      <Basket
        data={data}
        id={id}
        order={order}
        handleBuyClick={handleBuyClick}
        removeForOrder={removeForOrder}
        cartOpen={isCartOpen}
        closeCart={() => setCartOpen(false)}
      />
      <FavoriteCard
        data={data}
        id={id}
        favorite={favorite}
        handleFavoriteClick={handleFavoriteClick} 
        removeForFavorite={removeForFavorite} 
        favoriteOpen={isFavoriteOpen}
        closeFavorite={() => setFavoriteOpen(false)}
      />
      <ComparedCard       
        id={id}
        compared={compared}
        handleComparedClick={handleComparedClick} 
        removeForCompared={removeForCompared} 
        comparedOpen={isComparedOpen}
        closeCompared={() => setComparedOpen(false)}
      />
      
    </>
  );
};
