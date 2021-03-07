import react, { useState } from 'react';
import './Skills.scss';
import { FaReact, FaGit  } from 'react-icons/fa';
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from 'react-icons/io';
import { SiRails } from 'react-icons/si';
import { DiRuby } from 'react-icons/di';
import { AiOutlineConsoleSql } from "react-icons/ai";
import { TiHtml5 } from "react-icons/ti";
// import FloatingActionButtons from './FloatingButton';
import ProgressBar from './ProgressBar';


export default function Skills(props) {
  const [progress, setProgress] = useState(0)
  const [bg, setBg] = useState('#dac29b')

  let content = {
    english: {
      title: "My skills",
      click: "Click on the icons to see my preferences"
    },
    french: {
      title: "Mes compétences",
      click: "cliquez sur les icônes pour voir mes préférences"
    }
  }

  props.language === "french" ? (content = content.french) : (content = content.english);

  return (
    <section id="skills">
      <div className="title-button-skills">
        {/* <FloatingActionButtons /> */}
      </div>
      <h1>{content.title}</h1>
        <div className="skill">
          <div className="skill-name" onClick={() => setProgress(99)} >
            <IoLogoCss3 className="skill-icon" />
            <label>CSS</label>
          </div>
          <div className="skill-name" onClick={() => setProgress(98)} >
            <TiHtml5 className="skill-icon" />
            <label>HTML</label>
          </div>
          <div className="skill-name" onClick={() => setProgress(95)}>
            <FaReact className="skill-icon"  />
            <label>React</label>
          </div>
          <div className="skill-name" onClick={() => setProgress(90)} >
            <IoLogoJavascript className="skill-icon" />
            <label>JavaScript</label>
          </div>
          <div className="skill-name" onClick={() => setProgress(85)} >
            <IoLogoNodejs className="skill-icon" />
            <label>Node.JS</label>
          </div>
          <div className="skill-name" onClick={() => setProgress(83)}>
            <FaGit className="skill-icon"  />
            <label>Git</label>
          </div>
          <div className="skill-name" onClick={() => setProgress(80)} >
            <AiOutlineConsoleSql className="skill-icon" />
            <label>SQL</label>
          </div>
          <div className="skill-name" onClick={() => setProgress(55)} >
            <DiRuby className="skill-icon" />
            <label>Ruby</label>
          </div>
        <div className="skill-name" onClick={() => setProgress(55)}>
            <SiRails className="skill-icon" />
            <label>Ruby on Rails</label>
          </div>
        </div>
        <div className="progress">
          <ProgressBar  bgcolor={bg} completed={progress} />
          <p className="click-prg">{content.click}</p>
        </div>
    </section>
  )
}