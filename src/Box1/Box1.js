import React, { Component } from 'react'
import './Box1.css'
import nature from '../Images/nature1.PNG'
import nature1 from '../Images/nature2.PNG'
import nature2 from '../Images/nature3.PNG'


export class Box1 extends Component {
  render() {
    return (
      <div>
        <div className='mainB'>
          <div className='container'>
            <div className='one'> <img className='nature' src={nature} alt='nature'></img></div>
            <div className='two'><img className='nature1' src={nature1} alt='nature'></img></div>
            <div className='three'><img className='nature2' src={nature2} alt='nature'></img></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Box1;
