import './About.scss';
import gsap from 'gsap';
// import { Animated } from "react-animated-css";
// import Modal from './Modal'

let tl = gsap.timeline()
tl.fromTo('[data-typing="developer"]', { color:"black"}, { color: "blue" , duration: 3 });


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
        <div className="wrapper">
          <div className="container">
            <p data-typing="from">From</p>
            <p data-typing="flight">flight attendant</p>
            <p data-typing="to">to</p>
            <a href="https://github.com/raphpaquet" data-typing="full-stack">full-stack</a>
            <a href="https://github.com/raphpaquet" data-typing="developer">Developer</a>
            <p data-typing="who">who</p>
            <p data-typing="love">Love to</p>
            <p data-typing="learn">learn</p>
            <p data-typing="create">& create</p>
            <p data-typing="with">with</p>
            <p data-typing="javascript">Javascript</p>
            <p data-typing="css">CSS</p>
            <p data-typing="nodejs">Node.js</p>
            <p data-typing="react">React</p>
            <p data-typing="html">HTML</p>
          </div>
        </div>
    </div>
  )
}