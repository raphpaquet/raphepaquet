import { HashLink } from 'react-router-hash-link';
import './Burger-btn.scss';

export default function BurgerBtn(props) {

     // sidebar open/close
    const openMenu = () => {
      document.querySelector('.sidebar').classList.add('open');
      document.querySelector('.about').classList.add('hidden');
    };
    const closeMenu = () => {
      document.querySelector('.sidebar').classList.remove('open');
      document.querySelector('.about').classList.remove('hidden');
    };

    let content = {
      english: {
        project: "projects",
        skill: "skills",
        contact: "contact",
        cv: "resume"
      },
      french: {
        project: "projets",
        skill: "compétences",
        contact: "contact",
        cv: "CV"
      }
    }
    
    props.language === "English" ? (content = content.english) : (content = content.french);

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
              <HashLink to="#project" className="category-btn" onClick={closeMenu}>{content.project}</HashLink>
            </li>
            <li>
              <HashLink to="#skills" className="category-btn" onClick={closeMenu}>{content.skill}</HashLink>
            </li>
            <li>
              <HashLink to="#contact" className="category-btn" onClick={closeMenu}>{content.contact}</HashLink>
            </li>
           </ul>
      </aside>
    </div>
  )
}