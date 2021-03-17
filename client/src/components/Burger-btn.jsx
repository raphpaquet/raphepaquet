import { HashLink } from 'react-router-hash-link';
import './Burger-btn.scss';

export default function BurgerBtn(props) {

     // sidebar open/close
    const openMenu = () => {
      document.querySelector('.sidebar').classList.add('open');
      document.querySelector('.image-icon').classList.add('hidden');
    };
    const closeMenu = () => {
      document.querySelector('.sidebar').classList.remove('open');
      document.querySelector('.image-icon').classList.remove('hidden');
    };

  return (
   <div id="burger">
     <div className="logo-burger">
      <h1 id="logo">raphpaquet</h1>
        <button onClick={openMenu} className='burger-btn'>
          &#9776;
        </button>

     </div>
      <aside className="sidebar">
         <button className="sidebar-close-button" onClick={closeMenu}>
            x
         </button>
           <ul className="categories">
            <li>
              <HashLink to="#project" className="category-btn" onClick={closeMenu}>Projects</HashLink>
            </li>
            <li>
              <HashLink to="#skills" className="category-btn" onClick={closeMenu}>Skills</HashLink>
            </li>
            {/* <li>
              <HashLink to="#about" className="category-btn" onClick={closeMenu}>About</HashLink>
            </li> */}
            <li>
              <HashLink to="#contact" className="category-btn" onClick={closeMenu}>Contact</HashLink>
            </li>
           </ul>
      </aside>
    </div>
  )
}