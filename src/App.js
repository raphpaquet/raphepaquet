import "./App.scss";
import { useState } from "react";
import TabsMenu from "./components/TabsMenu";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import BurgerBtn from "./components/Burger-btn";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactUs from "./components/ContactUs";

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

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact>
          <div className="App" id="App">
            <main>
              <nav>
                <h1 className="logo-raph">raphpaquet</h1>
                <ul className="nav-links">
                  <TabsMenu
                    language={language}
                    handleSetLanguage={(language) => {
                      setLanguage(language);
                      storeLanguageInLocalStorage(language);
                    }}
                  />
                </ul>
              </nav>
              <div id="nav-small-screen">
                <BurgerBtn language={language} />
              </div>
              <About language={language} />
            </main>
          </div>
          <Projects language={language} />
          <Skills language={language} />
          <ContactUs language={language} />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
