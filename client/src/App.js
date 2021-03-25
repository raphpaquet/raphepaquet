import './App.scss';
import gsap from 'gsap';
import { useState } from 'react';
import TabsMenu from './components/TabsMenu';
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history';
import Skills from './components/Skills';
import Projects from './components/Projects';
import BurgerBtn from './components/Burger-btn';
import { HashLink } from 'react-router-hash-link';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Button from './components/Button';
import About from './components/About';

// const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// document.addEventListener("DOMContentLoaded", function(event){
//   tl.to('.intro', {visibility: "visible"})
//   tl.to('.text', { y:'0%', duration: 1, stagger: 0.50 });
//   tl.to('.slider', { y:"-100%", duration: 1.5, delay: 0.5 });
//   tl.to('.intro', { y: "-100%", duration: 1 }, "-=1");
//   tl.fromTo('nav', { opacity:0 }, { opacity:1 , duration: 1 });
//   tl.fromTo('#nav-small-screen', { opacity:0 }, { opacity:1 , duration: 1 });
//   tl.fromTo('.big-text', { opacity:0 }, { opacity:1 , duration: 1 }, "-=1" );
//   tl.fromTo('.button', { opacity:0 }, { opacity:1 , duration: 1 }, "-=1" );
//   tl.fromTo('.selfie', { opacity:0 }, { opacity:1 , duration: 1 }, "-=0.5" );
// })

const history = createBrowserHistory();

function App() {

  const [about, setAbout] = useState(false)
  // /* SET LANGUAGE */
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );

  // console.log(language)

  function storeLanguageInLocalStorage(language) {
    localStorage.setItem("language", language);
  }

  // <select 
  // className="custom-select"
  // value={props.language}
  // onChange={e => props.handleSetLanguage(e.target.value)}>
  //   <option value="english">English</option>
  //   <option value="french">Français</option>
  // </select>

  // const handleClick = () => {
  //   openAbout;
  // }

  const openAbout = () => {
    document.querySelector('.about-text').classList.remove('hidden');
    // document.querySelector('.icon-interest').style.visibility = "visible";
    document.querySelector('.presentation-text').classList.add('hidden');
  };


  let content = {
    english: {
      name: "Hey, I'm Raphaëlle !",
      tech: "Newbie in the tech world",
      about: "More About Me"
    },
    french: {
      name: "Hey, moi c'est Raphaëlle !",
      tech: "Novice de l'industrie de la technologie",
      about: "En savoir plus sur moi"
    }
  }

  return (
    <Router history={history}>
      <Switch>
      <Route path="/" exact>
      <div className="App">
        <main>
          <section className="landing">
            <nav>
              <h1 className="logo-raph">raphpaquet</h1>
              <ul className="nav-links">
                <TabsMenu 
                language={language}
                handleSetLanguage={language => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language)
                }}
                  />
              </ul>
            </nav>
            <div id="nav-small-screen">
              <BurgerBtn />
            </div>
                {/* <h2 className="big-text">Junior Web Developer</h2> */}
            <div className="presentation">
              <div className="presentation-text">
                {/* <button onClick={openAbout}>
                <Button />
                </button> */}
              </div>
              <div className="about-text hidden">
                <About />
              </div>
              <div className="image-icon">
                {/* <div className="icon-interest">
                  <img src="./images/camping.png" className="invisible icon-one" />
                  <img src="./images/coffee.png" className="invisible icon-2"/>
                  <img src="./images/icon-travel-6.jpg" className="invisible icon-3" />
                  <img src="./images/mountains.png" className="invisible icon-4" />
                  <img src="./images/computer-girl.png" className="invisible icon-5" />
                  <img src="./images/food.png" className="invisible icon-6" />
                </div> */}
                <img className="selfie" src="./images/selfie1.png" />
              </div>
            </div>
          </section>
        </main>
        <div className="intro">
          <div className="intro-text">
            <h1 className="hide">
              <span className="text">Hey</span>
            </h1>
            <h1 className="hide">
              <span className="text">I'm Raphaëlle</span>
            </h1>
            <h1 className="hide">
              <span className="text">Newbie in the tech world!</span>
            </h1>
          </div>
        </div>
        <div className="slider"></div>
      </div>
      <Projects language={language}/>
      <Skills language={language}/>
      <Contact language={language}/>
      <Footer />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
