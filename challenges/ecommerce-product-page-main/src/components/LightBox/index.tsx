import './style.css';
import Basket from '../Basket';
const LightBox = ({parent} : {parent : () => void}) => {
  return (
    <div className="lightbox">
     
      <div className="basket-view">
      <button className="icon" onClick={() => parent()} aria-label="Close LightBox">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M11.596.782l2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782z"
          ></path>
        </svg>
      </button>
        <Basket show={true} />
      </div>
    </div>
  )
};

export default LightBox;