import React, { Component } from 'react'
import './Box5.css'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {Link} from 'react-router-dom'


export class Box5 extends Component {
  
  render() {
    return (
      <div>
        <h2 className='head5'>  Latest Stories <hr/></h2>
        <div className='hrline'><hr/></div>
        <div className='wrapperbox5'>
          <div className='wrapperbox51'>
          <Link to='/travel/blog'><h2>Catch waves with an adventure Guide</h2>
            
            <p>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as tourist distination.It has a plethora of temples and palaces.Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as tourist distination.It has a plethora of temples and palaces</p></Link>
            <div className='date5'>Travel <span>/ November 17 2021</span></div>
          </div>
          <div className='wrapperbox52'>
          <Link to='/travel/blog'><h2>Gain your shape with an adventure leap</h2>
            
            <p>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as tourist distination.It has a plethora of temples and palaces.Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as tourist distination.It has a plethora of temples and palaces</p></Link>
            <div className='date5'>Fitness <span>/ November 17 2021</span></div>
          </div>
          <div className='wrapperbox53'>
          <Link to='/travel/blog'><h2>Progress of Artificial Intelligence </h2>
           
            <p>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as tourist distination.It has a plethora of temples and palaces.Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as tourist distination.It has a plethora of temples and palaces</p></Link>
            <div className='date5'>Technology <span>/ November 17 2021</span></div>
          </div>
        </div>
        <div className='hrline'><hr/></div>
        <div className='view'>VIEW MORE  <span className='arrow5'><AiOutlineArrowRight/></span></div>

      </div>
      
    )
  }
}

export default Box5
