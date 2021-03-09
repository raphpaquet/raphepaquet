import './About.scss';
// import { Animated } from "react-animated-css";
// import Modal from './Modal'


export default function About(props) {

  let content = {
    english: {
      title: "Hi, my name is Raphaëlle, nice to meet you :)",
      about: "Little about me",
      text1: 'I studied fashion marketing, business and kinesiology while working in the restaurant industry. I finally became a flight attendant until the pandemic had me put my wings down. Unemployed and looking for a new challenge, the excitement of learning missed me. I finally decided to plunge into coding, a project that I had postponed for a while. I decided to enroll at the ',
      text2: " web development Bootcamp in October 2020 and went through 12 intensive weeks of coding immersion. Not only did I learn multiple skills, but mostly, I discovered a new passion for front-end development. My passion, autodidactic attitude and perseverance help me become a better coder every day.",
    },
    french: {
      title: "Salut, je m'appelle Raphaëlle, enchantée :)",
      about: "Un peu sur moi.. ",
      text1: "J’ai étudié en commercialisation de la mode, en business ainsi qu’en kinésiologie tout en travaillant dans le milieu de la restauration. J’ai finalement poursuivi un rêve de devenir agente de bord jusqu'à ce que la pandémie m’oblige à poser mes ailes. Étant sans emploi et à la recherche de nouveaux défis, je me suis initiée au codage, projet que j’avais mis sur la glace depuis un moment. Ma curiosité et ma soif d’apprentissage, m’ont amené à m’inscrire dans un Bootcamp de développement web à ",
      text2: " où j’y ai passé 12 semaines intensives d’immersion. Non seulement j’ai acquis de multiples compétences, mais je me suis découvert une nouvelle passion pour le développement front-end. Mon attitude autodidacte et ma persévérance m'aident à devenir une meilleure codeuse à tous les jours."
    }
  }

  props.language === "french" ? (content = content.french) : (content = content.english);


  return (
    <div id="about" className="about">
        <span>From flight attendant to web developer&nbsp;</span><br></br>
        <span>Just Graduated the <a className="a-link" href="https://www.lighthouselabs.ca" target="_blank">Lighthouse Labs</a><br></br> web developement bootcamp</span>
        <br></br><span>Other Studies in Fashion marketing, <br></br> Business & Kinesiology</span><br></br>
        <br></br><span className="uppercase bolder justify">Love learning &</span><span className="uppercase">&nbsp;want to learn more</span>
        <br></br><span className="uppercase bolder justify">Love creating &</span><span className="uppercase">&nbsp;want to create more</span>
        <br></br><span className="uppercase bolder justify">Love working&nbsp; &</span><span className="uppercase">&nbsp;want to work more</span><span></span><br></br>
        <span>ATM Working on an e-commerce and an outdoor company website</span>
        <br></br><span className="uppercase">Let's connect </span>
        {/* <span>{content.text1}<a className="ref" href="https://www.lighthouselabs.ca/" target="_blank">Lighthouse Labs</a>{content.text2} 
        <Modal 
          language={props.language}
        /> */}
        {/* </p> */}
    </div>
  )
}