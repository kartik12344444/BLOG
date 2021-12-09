import React, { Component } from 'react'
import './Box4.css'
import box4 from '../Images/box4.PNG'
import box42 from '../Images/box42.PNG'
import box43 from '../Images/box43.PNG'
import box44 from '../Images/box44.PNG'
import {Link} from 'react-router-dom'


export class Box4 extends Component {
 
  render() {
    return (
      <div>
        <div className='container4'>
          <div className='box41'>
               <Link to='/travel/blog'><img src={box4} alt='type1'></img></Link>
          </div>
          <div className='box42'>
               <div className='one4'>
               <img src={box42} alt='type1'></img>
               <Link><div className='host'>Fly to the Village You Love the most
               <div className='date4'>Travel <span>/ November 17 2021</span></div>
               </div></Link>
               <div className='number'>1</div>
               </div>
          </div>
          <div className='box43'>
               <div className='one4'>
               <img src={box43} alt='type1'></img>
               <Link><div className='host'>The most peacefull city in the UK
               <div className='date4'>Travel <span>/ November 17 2021</span></div>
               </div></Link>
               <div className='number'>2</div>
               </div>
          </div>
          <div className='box44'>
               <div className='one4'>
               <img src={box44} alt='type1'></img>
               <Link><div className='host'>Enjoy your vacation to the most 
               <div className='date4'>Travel <span>/ November 17 2021</span></div>
               </div></Link>
               <div className='number'>3</div>
               </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Box4


