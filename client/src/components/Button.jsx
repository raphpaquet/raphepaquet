import './Button.scss';
import { useState } from 'react';

export default function Button(props) {


  return (
    <button class="button">En savoir plus
    <div class="button__horizontal"></div>
    <div class="button__vertical"></div>
  </button>
  )
}