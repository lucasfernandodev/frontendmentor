import style from "./style.module.css";
import {forwardRef,HtmlHTMLAttributes} from 'react';
interface SearchProps extends HtmlHTMLAttributes<HTMLInputElement>{

}

const Search: React.ForwardRefRenderFunction<HTMLInputElement,SearchProps> = ({
  ...args
}, ref) => {

  return (
        <fieldset className={style["search-group"]}>
          <label htmlFor="search-country">Search for a country:</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="10" cy="10" r="7"></circle>
            <line x1="21" y1="21" x2="15" y2="15"></line>
          </svg>

          <input
            ref={ref}
            id="search-country"
            type="text"
            placeholder="Search for a country..."
            {...args}
          />
        </fieldset>
  );
};

export default forwardRef(Search);
