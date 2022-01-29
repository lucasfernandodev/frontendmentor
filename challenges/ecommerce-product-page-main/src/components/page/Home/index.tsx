import './style.css';

import Brand from '/public/assets/img/logo.svg';
import Avatar from '/public/assets/img/image-avatar.png';
import Button from '../../Button';
import Basket from '../../Basket';

import iconMenu from '/public/assets/img/icon-menu.svg';
import inconClose from '/public/assets/img/icon-close.svg';
import iconCart from '/public/assets/img/icon-cart.svg';
import iconCartwhite from '/public/assets/img/icon-cart-white.svg';
import iconMinus from '/public/assets/img/icon-minus.svg';
import iconPlus from '/public/assets/img/icon-plus.svg';
import Cart from '../../Cart';
import { useState } from 'react';
import LightBox from '../../LightBox';
import Navbar from '../../Navbar';


const Home = () => {

  const [qtdProduct, setQtdProduct] = useState<number>(0);
  const [cartItem, setCartItem] = useState<number>(0);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showLightBox, setShowLightBox] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  function addProduct(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault()
    setQtdProduct(qtdProduct + 1)
  };

  function removeProduct(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    setQtdProduct(qtdProduct >= 1 ? qtdProduct - 1 : qtdProduct)
  }

  function toggleCard() {
    if (showCart !== true) {

      setShowCart(true);
      setTimeout(() => setShowCart(false), 5000)
      return false
    }
    if (showCart === true) {
      setShowCart(false);
      setTimeout(() => setShowCart(false), 5000)
      return false
    }


  }

  function toggleLightBox() {
    if (showLightBox !== true) return setShowLightBox(true);
    if (showLightBox === true) return setShowLightBox(false);
  }

  function toggleNavbar() {
    if (showNavbar !== true) return setShowNavbar(true);
    if (showNavbar === true) return setShowNavbar(false);
  }

  function addProductCart() {
    if (qtdProduct > 0) {
      setCartItem(qtdProduct)
    }
  }

  function removeProductCart() {
    if (qtdProduct >= 0) {
      setCartItem(0)
    }
  }

  return (
    <div className="container">

      {showLightBox === true && <LightBox parent={toggleLightBox} />}

      <header className="header">

        <div className="wrapper">
          <button className='btn-menu' onClick={() => toggleNavbar()}>
            <img src={showNavbar === true ? inconClose : iconMenu} />
          </button>
          <div className="brand">
            <img src={Brand} alt="brand sneakers" />
          </div>

          <Navbar show={showNavbar} />
        </div>

        <div className="wrapper">
          <button className="btn-cart" onClick={() => toggleCard()}>
            <img src={iconCart} />
            {cartItem !== 0 && (
              <span className='cart-notify'>{cartItem}</span>
            )}

          </button>
          <div className="avatar">
            <img src={Avatar} alt="User Avatar" />
          </div>
        </div>
      </header>

      <main className="main">
        {showCart !== false && (
          <Cart
            onLight={toggleLightBox}
            clearCart={removeProductCart}
            price={125.00}
            qtd={cartItem}
            title="Fall Limited Edition Sneakers"
            className="cart"
          />
        )}


        <section className="section-basket">
          <Basket onLight={toggleLightBox} />
        </section>


        <section className="section-product">
          <div className="product-company">
            Sneaker Company
          </div>
          <div className="product-title">
            <h1>Fall Limited Edition Sneakers</h1>
          </div>
          <div className="product-about">
            <p>
              These low-profile sneakers are your perfect casual wear companion. Featuring a
              durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
          </div>
          <div className="product-amount">
            <p>
              <span className="product-value">$125.00</span>
              <span className="product-discount">50%</span>
            </p>
            <span className="product-value-off">$250.00</span>
          </div>
          <div className="product-add-cart">
            <div className="increase-item">
              <button onClick={e => removeProduct(e)}>
                <img src={iconMinus} alt="remove item from cart" />
              </button>
              <span>{qtdProduct}</span>
              <button onClick={e => addProduct(e)}>
                <img src={iconPlus} alt="add item to cart" />
              </button>
            </div>
            <div className="add-cart">
              <Button onClick={() => addProductCart()}><img src={iconCartwhite} alt="Add to Cart" />Add to cart</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
};

export default Home;