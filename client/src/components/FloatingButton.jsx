import React from 'react';
import './FloatingButton.scss'
import { HashLink } from 'react-router-hash-link';



export default function FloatingActionButtons() {
  return (
    <div className="floating-btn">
      <HashLink className="to-top" smooth to="#landing" ></HashLink>
    </div>
  );
}
