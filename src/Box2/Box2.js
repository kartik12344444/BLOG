import React, { Component } from 'react'
import './Box2.css'
import latest1 from '../Images/latest1.PNG'
import latest2 from '../Images/latest2.PNG'
import latest3 from '../Images/latest3.PNG'
import {Link} from 'react-router-dom'

export class Box2 extends Component {
  
  render() {
    return (
      <div>
        <h2 className='header'>The Latest <hr/></h2>
        <div className='wrapper'>
          <div className='wrapper1'><img src={latest1} alt='latest'></img>
             <Link to='/travel/blog'><h2>Akshardham Temple</h2></Link>
             <p>Established in 1992 in Gandhinagar, Akshardham Temple is dedicated to Lord Swaminarayan, who belongs to Vaishnav tradition. The temple is considered to be one of the top sites to see in Gujarat because of its history as well as architecture.</p>
            <div className='date'>Travel <span>/ November 17 2021</span></div>

          </div>
          <div className='wrapper2'><img src={latest2} alt='latest'></img>
             <Link to='/travel/blog'><h2>Laxmi Vilas Palace</h2></Link>
            <p>Laxmi Vilas Palace is one of the must-visit tourist attractions in Gujarat, and a testament to unparalleled opulence and grandeur. Built-in the Indo-Saracenic school of architecture. Till today, it is the residence of the royal family of Baroda.</p>
            <div className='date'>Travel <span>/ November 17 2021</span></div>
          </div>
          <div className='wrapper3'><img src={latest3} alt='latest'></img>
            <Link to='/travel/blog'><h2>The Stone Chariot</h2></Link>
            <p>The chariot was built by King Krishnadevaraya of the Vijayanagara Empire, who got fascinated with the Konark Sun temple chariot while fighting a battle in Odissa.The chariot is meant to represent the beauty and artistic perfection of the Empire.</p>
            <div className='date'>Travel <span>/ November 17 2021</span></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Box2
