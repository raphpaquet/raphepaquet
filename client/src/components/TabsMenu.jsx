import React, { useState } from 'react';
import './TabsMenu.scss';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {
  BrowserRouter as Router,
  useHistory
} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import ToggleSwitch from './ToggleSwitch';



export default function TabsMenu(props) {

  const history = useHistory()
  // const redirectContact = () => {
  //     history.push('/contact')
  // }
  

  const [isToggled, setIsToggled] = useState(false)
  /* SET LANGUAGE */
  let languageStoredInLocalStorage = localStorage.getItem("language");

  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "english"
  );

  const handleToggle = (language) => {
    if(isToggled && language === 'english') {
      setLanguage('french')
    } else {
      setLanguage('english')
    }
    console.log(language)
  }

  function storeLanguageInLocalStorage(language) {
    console.log('language', language)
    if (language === "english" || '') {
      setLanguage('french')
    } else if (language === "french" ){
      setLanguage('english')
    }
    localStorage.setItem("language", language);
  }

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

  props.language === "french" ? (content = content.french) : (content = content.english);



  return (

    <div className="page">
    <nav className="page__menu menu">
      <ul className="menu__list r-list">
        <li className="menu__group"><HashLink smooth to="#project" className="menu__link r-link text-underlined">Projects</HashLink></li>
        <li className="menu__group"><HashLink smooth to="#skills" className="menu__link r-link text-underlined">Skills</HashLink></li>
        <li className="menu__group"><HashLink smooth to="#contact" className="menu__link r-link text-underlined">Contact</HashLink></li>
        <li className="menu__group"><a href="https://www.canva.com/design/DAERGl5eu-Y/qM8RzslwTKL7Mk0_lwDmYg/view" className="menu__link r-link text-underlined" target="_blank">Resume</a></li>
        <li className="menu__group"><a href="https://www.linkedin.com/in/raphellepaquet/" className="menu__link r-link text-underlined" target="_blank"><LinkedInIcon /></a></li>
        <li className="language">
          <span>En&nbsp;</span>
          <ToggleSwitch 
            isToggled={isToggled}
            onToggle={() => setIsToggled(false), () => handleToggle(language)}
          />
          <span>&nbsp;Fr</span></li>
      </ul>
    </nav>
  </div>
  
  )
}