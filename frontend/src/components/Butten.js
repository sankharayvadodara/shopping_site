import React from 'react'
import '../styles/button.css'


const Butten = ({btnTtex, classText }) => {
  return <button className={classText}>{btnTtex}</button>
  
};

export default Butten;