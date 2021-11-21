import React, { Component } from 'react'
import './Reactpage.css'
import {BsHandThumbsUp} from 'react-icons/bs'
import {FiShare2} from 'react-icons/fi'
import profile from '../Images/profile.PNG'
import reactpage from '../Images/reactpage.PNG'
import reactpage2 from '../Images/reactpage2.PNG'
import latest1 from '../Images/latest1.PNG'
import latest2 from '../Images/latest2.PNG'
import latest3 from '../Images/latest3.PNG'
import {Link} from 'react-router-dom'










export class Reactpage extends Component {

  render() {
    return (
      <div>
         <div className='Box6'>
         </div>
         <div className='article'>
           <div className='article1'>
              <div className='arrenge'>
              <div> <BsHandThumbsUp />... 9.5K</div> 
              <div> <FiShare2 /> ...Share this Article</div>
              </div>
           </div>
           <div className='article2'>
             <h2>5 Ways to animate a React App.</h2>
             <img src={profile} alt='profile'></img>
             <div className='profile6'>Kartik P
               <p>Nov 20,2021 -10 min read</p>
             </div>
                      <div className='artic1'>
                      <img src={reactpage} alt='react'></img>
                      <p>
                        Animation is ReactJs app is a poular topic and there are many ways to create deifferent type of animations.Many developers create animation exclusively using css and adding classes to HTML tags .This is a great way and you should use it .If you want to create cmplex animations you can pat attentin to GreenSock.GreenSock is the most powerful animations platform.There are also lot of libraries ,components for creating animation in React
                      </p>
                      <p>Let's talk about them</p>
                      <div className='code6'>
                       <img src={reactpage2} alt='page2'></img>
                       </div> 
                      </div>
                      
             </div> 
             
           </div>
           <img className='profile77' src={profile} alt='profile'></img>
             <div className='profile67'>Kartik P
               <p>Nov 20,2021 -10 min read</p>
         </div>
         <div>

         <h2 className='header7'>More from the Siren<hr/></h2>
        <div className='wrapper7'>
          <div className='wrapper17'><img src={latest1} alt='latest'></img>
             <Link to='/travel/blog'><h2>Akshardham Temple</h2></Link>
             <p>Established in 1992 in Gandhinagar, Akshardham Temple is dedicated to Lord Swaminarayan, who belongs to Vaishnav tradition. The temple is considered to be one of the top sites to see in Gujarat because of its history as well as architecture.</p>
             <img className='nan' src={profile} alt='profile'></img>
             <div className='profile6777'>Kartik P
               <p>Nov 20,2021 -10 min read</p>
             </div>

          </div>
          <div className='wrapper27'><img src={latest2} alt='latest'></img>
             <Link to='/travel/blog'><h2>Laxmi Vilas Palace</h2></Link>
            <p>Laxmi Vilas Palace is one of the must-visit tourist attractions in Gujarat, and a testament to unparalleled opulence and grandeur. Built-in the Indo-Saracenic school of architecture. Till today, it is the residence of the royal family of Baroda.</p>
            <img className='nan' src={profile} alt='profile'></img>
             <div className='profile6777'>Kartik P
               <p>Nov 20,2021 -10 min read</p>
             </div>

          </div>
          <div className='wrapper37'><img src={latest3} alt='latest'></img>
            <Link to='/travel/blog'><h2>The Stone Chariot</h2></Link>
            <p>The chariot was built by King Krishnadevaraya of the Vijayanagara Empire, who got fascinated with the Konark Sun temple chariot while fighting a battle in Odissa.The chariot is meant to represent the beauty and artistic perfection of the Empire.</p>
            <img className='nan' src={profile} alt='profile'></img>
             <div className='profile6777'>Kartik P
               <p>Nov 20,2021 -10 min read</p>
             </div>

          </div>
        </div>
      </div>
         
      </div>
    )
  }
}

export default Reactpage
