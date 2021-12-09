import React, { Component } from 'react'
import './Box1.css'
import nature from '../Images/nature1.PNG'
import nature1 from '../Images/nature2.PNG'
import nature2 from '../Images/nature3.PNG'
import {Link} from 'react-router-dom'

export class Box1 extends Component {
  render() {
    return (
      <div>
        <div className='mainB'>
          <div className='container'>
          <div className='one'><Link to='/travel/blog/4'> <img className='nature' src={nature} alt='nature'></img></Link></div>
          <div className='two'><Link to='/travel/blog/5'><img className='nature1' src={nature1} alt='nature'></img></Link></div>
          <div className='three'><Link to='/travel/blog/1'><img className='nature2' src={nature2} alt='nature'></img></Link></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Box1;
