import { useEffect, useRef, useState } from "react";
import style from "./style.module.css";

const svgArrow = (
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
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

type selectProps = {
  onClick: (value: string) => void;
};

const Select: React.FC<selectProps> = ({ onClick }) => {
  const menuDropdownRef = useRef<HTMLUListElement>(null);

  const [filterValue, setFilterValue] = useState("all");

  function closeMenuOption() {
    if (menuDropdownRef.current) {
      menuDropdownRef.current.style.display = "none";
      menuDropdownRef.current.setAttribute("TabIndex", "-1");
    }
  }

  function openMenuOption() {
    if (menuDropdownRef.current) {
      menuDropdownRef.current.style.display = "flex";
      menuDropdownRef.current.focus();
      menuDropdownRef.current.setAttribute("TabIndex", "1");
    }
  }

  function changeFilterOption(e: MouseEvent) {
    if (menuDropdownRef.current) {
      menuDropdownRef.current.focus();
    }

    const element = e.target as HTMLElement;
    const value = element.dataset.value;

    value && setFilterValue(value);
    value && onClick(value);

    closeMenuOption();
  }

  useEffect(() => {
    if (menuDropdownRef.current) {
      const ListItens = menuDropdownRef.current.querySelectorAll("li");

      ListItens.forEach((item) =>
        item.addEventListener("click", (e) => changeFilterOption(e))
      );
    }
  }, []);


  return (
    <fieldset className={style["search-filter"]}>
      <div className={style.layer} onClick={() => openMenuOption()} tabIndex={0} />
      <label htmlFor="search-filter">Filtrar Pesquisa por:</label>

      {svgArrow}

      <select
        tabIndex={-1}
        onChange={(e) => setFilterValue(filterValue)}
        defaultValue={filterValue}
        id="search-filter"
        aria-label="Filter by Region"
      >
        <option value={filterValue}>
          {filterValue === "all" ? "Filter by Region" : filterValue}
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europa">Europa</option>
        <option value="Oceania">Oceania</option>
      </select>

      <ul
        className={style["menu-dropdown"]}
        ref={menuDropdownRef}
        onBlur={closeMenuOption}
        tabIndex={1}
      >
        <li data-value="Africa">Africa</li>
        <li data-value="America">America</li>
        <li data-value="Asia">Asia</li>
        <li data-value="Europa">Europa</li>
        <li data-value="Oceania">Oceania</li>
      </ul>
    </fieldset>
  );
};

export default Select;
