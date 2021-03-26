import './App.scss';
import { useState } from 'react';
import TabsMenu from './components/TabsMenu';
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history';
import Skills from './components/Skills';
import Projects from './components/Projects';
import BurgerBtn from './components/Burger-btn';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';

const history = createBrowserHistory();

function App(props) {

  // /* SET LANGUAGE */
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );

  function storeLanguageInLocalStorage(language) {
    localStorage.setItem("language", language);
  }
  console.log(language)

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

  props.language === "English" ? (content = content.English) : (content = content.French);

  return (
    <Router history={history}>
      <Switch>
      <Route path="/" exact>
      <div className="App">
        <main>
          <section id="landing">
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
              <BurgerBtn language={language}/>
            </div>
            <div className="presentation">
              <div className="about-text">
                <About language={language}/>
              </div>
              <div className="image-icon">
                <img className="selfie" src="./images/selfie1.png" />
              </div>
            </div>
          </section>
        </main>
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
