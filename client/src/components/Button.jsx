import './Button.scss';
import { useState } from 'react';

export default function Button(props) {


  return (
    <button className="button">En savoir plus
    <div className="button__horizontal"></div>
    <div className="button__vertical"></div>
  </button>
  )
}