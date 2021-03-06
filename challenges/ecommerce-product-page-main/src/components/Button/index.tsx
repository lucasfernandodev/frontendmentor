import { FunctionComponent } from 'react';
import './style.css';

interface interfaceButton  {
  onClick ?: () => void,
  // ariaLabel: Element.ar
}

const Button: FunctionComponent<interfaceButton> = ({children, onClick, ...args}) => {
  return (
    <button {...args} onClick={onClick} className="button" >
      {children}
    </button>
  )
};

export default Button;