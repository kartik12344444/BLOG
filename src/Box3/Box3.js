import React from 'react'
import './Box3.css'
import bollywood from '../Images/bollywood.PNG'
import tech from '../Images/tech.PNG'
import hollywood from '../Images/hollywood.PNG'
import fitness from '../Images/fitness.PNG'
import latest4 from '../Images/latest4.PNG'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {Link} from 'react-router-dom'



function Box3() {
  return (
    <div>
      <h2 className='header3'>Latest Articles <hr/></h2>
      <div className='container3'>
        <div className='box31'>
            <div className='one3'>
               <img src={bollywood} alt='bollywood'></img>
               <div>
               <Link to='/travel/blog/2'><h2>Bollywood Hungama</h2> 
               <p>Hindi cinema, often known as Bollywood and formerly as Bombay cinema,[4] is the Indian Hindi-language film industry based in Mumbai. </p></Link>
               </div>
            
            </div>
        </div>
        <div className='box32'>
            <div className='one3'>
                   <img src={fitness} alt='fitness'></img>
                   <div>
                   <Link to='/travel/blog/4'><h2>Health & Fitness Guide</h2> 
                   <p>Walking, lifting weights, doing chores – it’s all good. Regardless of what you do, regular exercise and physical activity is the path to health and well-being. </p></Link>
                   </div>
            </div>

        </div>
        <div className='box33'>
             <div className='one3'>
                <img src={tech} alt='tech'></img>
                <div>
                <Link to='/travel/blog/1'><h2>Largest superconducting quantum computer</h2> 
                 <p>IBM has created the world’s largest superconducting quantum computer, surpassing the size of state of the art machines from Google and Chinese researchers.</p></Link>
                </div>


             </div>
        </div>
        <div className='box34'>
             <div className='one3'>
                <img src={hollywood} alt='hollywood'></img>
                <div>
                <Link to='/travel/blog/5'><h2>Behind Hollywood’s Alternate History</h2>
                  <p>Ryan Murphy has returned to the Old Hollywood well yet again with his latest Netflix show, but this time, there’s a twist. Although Hollywood features several</p></Link>
                </div>
             </div>
             
             <div className='load'><span><AiOutlineArrowDown /></span>  ..LOAD MORE</div>
        </div>
        <div className='box35'>
           <h2>Advertisement</h2>
        </div>
        <div className='box36'>
           <div className='box361'>
             <h2>Top Posts <hr/></h2>
             <Link><img src={latest4} alt='topost'></img>
             <h4>Catch waves with an adventure guide</h4>
             <div className='date3'>Travel <span>/ November 17 2021</span></div></Link>
           </div> 
        </div>
      </div>
    </div>
  )
}

export default Box3;