import {React, useState} from 'react'
import {navLinks} from "../constants/index.js";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map((item) => (
        <li key={item.id} className="nav-li">
          <a href={item.href} className="nav-li_a" onClick={() => {}}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  )
}

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const toggleMenu = () => {
    setToggle((prevToggle) => !prevToggle)
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 ">
      <div className= "max-w-screen-2xl mx-auto ">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
            <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
              Agung Prayogi
            </a>
           <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle Menu">
              <img src={toggle ? "assets/close.svg" : "assets/menu.svg"} alt={"toggle"} className={"w-6 h-6"}/>
           </button>
          <nav className="sm:flex hidden">
            <NavItems/>
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${toggle ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems/>
        </nav>
      </div>
    </header>
  )
}
export default Navbar
