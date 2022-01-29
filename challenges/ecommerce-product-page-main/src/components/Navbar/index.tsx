import './style.css'

type typeNavbar = {
  show?: boolean
}

const Navbar = ({show} : typeNavbar) => {
  return (
    <nav className={`navbar ${show === true && 'show'}`}>
      <ul className="menu">
        <li className="menu-item"><a href="#" className="menu-link">Collections</a></li>
        <li className="menu-item"><a href="#" className="menu-link">Men</a></li>
        <li className="menu-item"><a href="#" className="menu-link">Woman</a></li>
        <li className="menu-item"><a href="#" className="menu-link">About</a></li>
        <li className="menu-item"><a href="#" className="menu-link">Contact</a></li>
      </ul>
    </nav>
  )
};

export default Navbar;