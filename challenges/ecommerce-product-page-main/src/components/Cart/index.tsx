import React, { FunctionComponent, useState } from 'react';
import './style.css';

import imageThumbnail1 from '/public/assets/img/image-product-1-thumbnail.jpg';
import iconDel from '/public/assets/img/icon-delete.svg';
import Button from '../Button';


type typeCart = {
  qtd: number,
  price: number
  title: string
  onLight?: () => void,
  clearCart?: () => void
}

const Cart: FunctionComponent<typeCart & React.HTMLAttributes<HTMLDivElement>> = (
  { qtd, price, title, className,onLight,clearCart, ...args }
  ) => {

  const [qtdProduct, setQtdProduct] = useState<number>(qtd !== 0 ? qtd : 0);

  if (qtd !== qtdProduct) setQtdProduct(qtd);

  const itemPrice = price;
  const itemqtd = qtd;
  const lastPrice = qtdProduct <= 0 ? itemPrice : itemPrice * itemqtd;

  return qtdProduct > 0 ? (
    <div className={`cart ${className}`} {...args}>
      <div className="cart-header">
        <h3>Cart</h3>
      </div>
      <div className="cart-main">

        <div className="cart-product">
          <div className="cart-product-image">
            <img src={imageThumbnail1} alt="image of a tennis" />
          </div>
          <div className="cart-product-info">
            <span className="product-title" onClick={() => onLight && onLight()}>{title}</span>
            <div className="content">
              <span className="product-price">${itemPrice}.00</span>
              {qtdProduct <= 0 ? null : (
                <>
                  <div className="product-qtd">x {qtdProduct}</div>
                </>
              )}
              <div className="product-last-price">${lastPrice}.00</div>
            </div>


          </div>
          <div className="cart-product-remove">
            <button onClick={() => clearCart && clearCart()} aria-label="Remove product from cart">
              <img src={iconDel} alt="Remove product from cart" />
            </button>
          </div>
        </div>
        <div className="cart-checkout">
          <Button aria-label="Checkout">Checkout</Button>
        </div>
      </div>
    </div>
  ) : (
    <div className={`cart cart-empty ${className}`} {...args}>
      <span>Your cart is empty.</span>
    </div>

  );
};

export default Cart;