import './style.css';

import image1 from '/public/assets/img/image-product-1.jpg';
import image2 from '/public/assets/img/image-product-2.jpg';
import image3 from '/public/assets/img/image-product-3.jpg';
import image4 from '/public/assets/img/image-product-4.jpg';

import imageThumbnail1 from '/public/assets/img/image-product-1-thumbnail.jpg';
import imageThumbnail2 from '/public/assets/img/image-product-2-thumbnail.jpg';
import imageThumbnail3 from '/public/assets/img/image-product-3-thumbnail.jpg';
import imageThumbnail4 from '/public/assets/img/image-product-4-thumbnail.jpg';


import { useEffect, useState } from 'react';
let i = 1;
const Basket = ({ show, onLight }: { show?: boolean, onLight?: () => void }) => {

  const [imagem, setImagem] = useState<string>(image1);
  const [showControl, setShowControl] = useState<boolean>(false)

  // Deixa a primeira imagem selecionada
  useEffect(() => {
    const basketItemActive: NodeListOf<HTMLElement> = document.querySelectorAll('.basket-slider-item img');
    basketItemActive[0].style.border = "2px solid var(--color-primary)";
    basketItemActive[0].style.opacity = '0.5';
    basketItemActive[0].classList.add('active');


    // Mostra controle do slider
    if (window.innerWidth <= 818) {
      console.log(window.innerWidth)
      setShowControl(true)
    }
  }, [])

  // Array com as imagens para o slider
  const imagens: any = {
    1: image1,
    2: image2,
    3: image3,
    4: image4
  }

  // Amplia uma imagem
  function ShowImage(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target: any = event.target;
    const imagemId = target.dataset.slider;

    const sliderItems: NodeListOf<HTMLElement> = document.querySelectorAll('.basket-slider-item img');

    for (const item of sliderItems) {
      item.style.border = "2px solid transparent";
      item.style.opacity = "1";
      target.classList.remove('active');
    }

    target.style.border = "2px solid var(--color-primary)";
    target.style.opacity = 0.5;
    target.classList.add('active');


    if (imagemId == 1) return setImagem(image1);
    if (imagemId == 2) return setImagem(image2);
    if (imagemId == 3) return setImagem(image3);
    if (imagemId == 4) return setImagem(image4);

  }

  // Scroll no lightbox
  function scrollImage(command: string) {



    if (command == 'prev') {
      if (i > 1) {
        i--
      }
    }

    if (command == 'next') {
      if (i < 4) {
        i++
      }
    }

    const sliderItems: NodeListOf<HTMLElement> = document.querySelectorAll('.basket-slider-item img');

    for (const item of sliderItems) {
      item.style.border = "2px solid transparent";
      item.style.opacity = "1";
      item.classList.remove('active');
    }

    sliderItems[i - 1].style.border = "2px solid var(--color-primary)";
    sliderItems[i - 1].style.opacity = '0.5;'
    sliderItems[i - 1].classList.add('active');

    setImagem(imagens[i])

  }


  return (
    <div className={`${show === true && 'show'} basket`}>

      {showControl === true && (

        <div className="basket-slider-control">
          <button className="icon-prev" onClick={() => scrollImage('prev')} aria-label="back image">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18px">
              <path
                fill="none"
                stroke="#1D2026"
                strokeWidth="3"
                d="M11 1L3 9l8 8"
              ></path>
            </svg>
          </button>
          <button className="icon-next" onClick={() => scrollImage('next')} aria-label="next image">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18px">
              <path
                fill="none"
                stroke="#1D2026"
                strokeWidth="3"
                d="M2 1l8 8-8 8"
              ></path>
            </svg>
          </button>
        </div>
      )}


      <div className="basket-show">
        <img src={imagem} alt="Image of a product" onClick={() => onLight && onLight()} />
      </div>
      <div className="basket-slider">
        <div className="basket-slider-item" onClick={event => ShowImage(event)}>
          <img data-slider="1" src={imageThumbnail1} alt="Image of a product" />
        </div>
        <div className="basket-slider-item" onClick={event => ShowImage(event)}>
          <img data-slider="2" src={imageThumbnail2} alt="Image of a product" />
        </div>
        <div className="basket-slider-item" onClick={event => ShowImage(event)}>
          <img data-slider="3" src={imageThumbnail3} alt="Image of a product" />
        </div>
        <div className="basket-slider-item" onClick={event => ShowImage(event)}>
          <img data-slider="4" src={imageThumbnail4} alt="Image of a product" />
        </div>
      </div>

    </div>
  )
};

export default Basket;