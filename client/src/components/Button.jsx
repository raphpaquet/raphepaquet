import './Button.scss';
import { useState } from 'react';

export default function Button(props) {

  let content = {
    english: {
      title: "Know More"
    },
    french: {
      title: "En savoir plus"
    }
  }
  
  props.language === "English" ? (content = content.english) : (content = content.french);
  return (
    <button className="button">{content.title}
    <div className="button__horizontal"></div>
    <div className="button__vertical"></div>
  </button>
  )
}