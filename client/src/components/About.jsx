import './About.scss';
import gsap from 'gsap';



const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

document.addEventListener("DOMContentLoaded", function(event){
tl.fromTo(".one", {x: -200, opacity: 0}, {x: 10, opacity: 1, rotation: 360 , duration: 1});
tl.fromTo(".two", {opacity:0, x:-300}, {x: 0, opacity:1, duration: 1});
tl.fromTo(".three", {opacity:0, scale:0}, {opacity:1, scale:1})
tl.fromTo(".four", {opacity: 0, scale: 0.1, color: "#fff"}, {opacity:1, scale:1, color: 'black',  duration:1})
tl.fromTo(".five", {opacity: 0, x: -400}, {opacity:1, x: 0, duration: 1});
tl.fromTo(".six", {opacity: 0, y: -400}, {opacity: 1, y: 0, duration: 1}); 
tl.fromTo(".seven", {opacity: 0}, {opacity:1, scale:1, repeat: 1, repeatDelay: 0.1})
tl.fromTo('.eight', {opacity: 0}, {opacity:1, rotation: 360})
tl.fromTo('.nine', {opacity: 0}, {opacity:1, rotation: -360})
tl.fromTo('.ten', {opacity: 0}, {opacity:1})
tl.fromTo('.eleven', {opacity: 0}, {opacity:1})
tl.fromTo('.twelve', {opacity: 0}, {opacity:1})
tl.fromTo('.thirteen', {opacity: 0}, {opacity:1})
tl.fromTo('.fourteen', {opacity: 0}, {opacity:1})
tl.fromTo('.fifthteen', {opacity: 0}, {opacity:1})
tl.to('.selfie', {filter: "grayscale(0)"})
})


export default function About(props) {



  let content = {
    english: {
      from: "From",
      flight: "Flight Attendant",
      to: 'to',
      full: "Full-Stack.",
      dev: "developer",
      who: "who", 
      love: "love to",
      learn: "learn", 
      create: "& create",
      with: "with"
    },
    french: {
      from: "Passée",
      flight: "d'agent de bord",
      to: 'à',
      full: "Full-Stack.",
      dev: "développeuse",
      who: "qui", 
      love: "aime",
      learn: "apprendre", 
      create: "& créer",
      with: "avec"
    }
  }

  props.language === "french" ? (content = content.french) : (content = content.english);


  return (
    <div id="about" className="about">
        <div className="wrapper">
          <div className="container">
            <p data-typing="from" className="one">From</p>
            <p data-typing="flight" className="two">flight attendant</p>
            <p data-typing="to" className="three">to</p>
            <a href="https://github.com/raphpaquet" data-typing="full-stack" className="four">full-stack</a>
            <a href="https://github.com/raphpaquet" data-typing="developer" className="five">Developer</a>
            <p data-typing="who" className="six">who</p>
            <p data-typing="love" className="seven">Love to</p>
            <p data-typing="learn" className="eight">learn</p>
            <p data-typing="create" className="nine">& create</p>
            <p data-typing="with" className="ten">with</p>
            <p data-typing="javascript" className="eleven">Javascript</p>
            <p data-typing="css" className="twelve">CSS</p>
            <p data-typing="nodejs" className="thirteen">Node.js</p>
            <p data-typing="react" className="fourteen">React</p>
            <p data-typing="html" className="fifthteen">HTML</p>
          </div>
        </div>
    </div>
  )
}