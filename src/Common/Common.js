import React from 'react'
import './Common.css'
import tech from '../Images/tech.PNG'
import latest4 from '../Images/latest4.PNG'
import nature3 from '../Images/nature3.PNG'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { withRouter } from 'react-router'

 const  Common=(props)=> {
 
  const {match} = props
  const {category} = match.params
    return (
      <div>
          <span><h2 className='doit'>{category} <hr/></h2><div className='top7'>Top Posts</div></span>
          <div className='common'>
            <div className='common11'>
            <div className='box51'>
            <div className='one5'>
               <img src={tech} alt='bollywood'></img>
               <div className='last'>
               <h2>Catch {category} with an Adventure Guide</h2>
               <p>Hindi cinema, often known as Bollywood and formerly as Bombay cinema,[4] is the Indian Hindi-language film industry based in Mumbai. </p>
               <div className='date5'>{category}<span>/ November 17 2021</span></div>
               </div>
            
            </div>
        </div>
            </div>
            <div className='common12'>
            <div className='box52'>
            <div className='one5'>
                   <img src={tech} alt='fitness'></img>
                   <div className='last'>
                   <h2>Catch {category} with an Adventure Guide</h2>
                   <p>Walking, lifting weights, doing chores – it’s all good. Regardless of what you do, regular exercise and physical activity is the path to health and well-being. </p>
                   <div className='date5'>{category} <span>/ November 17 2021</span></div>
                   </div>
            </div>
          </div>
        </div>
            <div className='common13'>
            <div className='box53'>
             <div className='one5'>
                <img src={tech} alt='tech'></img>
                <div className='last'>
                 <h2>Catch {category} with an Adventure Guide</h2>
                 <p>IBM has created the world’s largest superconducting quantum computer, surpassing the size of state of the art machines from Google and Chinese researchers.</p>
                 <div className='date5'>{category} <span>/ November 17 2021</span></div>
                </div>


             </div>
        </div>
            </div>
            <div className='common14'>
            <div className='box54'>
             <div className='one5'>
                <img src={nature3} alt='hollywood'></img>
                <div className='last'>
                  <h2>Catch {category} with an Adventure Guide</h2>
                  <p>Ryan Murphy has returned to the Old Hollywood well yet again with his latest Netflix show, but this time, there’s a twist. Although Hollywood features several</p>
                  <div className='date5'>{category}<span>/ November 17 2021</span></div>
                </div>
             </div>
             
            </div>
            </div>
            <div className='common15'>
            <div className='box53'>
             <div className='one5'>
                <img src={tech} alt='tech'></img>
                <div className='last'>
                 <h2>Catch {category} with an Adventure Guide</h2>
                 <p>IBM has created the world’s largest superconducting quantum computer, surpassing the size of state of the art machines from Google and Chinese researchers.</p>
                 <div className='date5'>{category} <span>/ November 17 2021</span></div>
                </div>


              </div>
             </div>
            </div>
            <div className='common16'>
            <div className='box52'>
            <div className='one5'>
                   <img src={nature3} alt='fitness'></img>
                   <div className='last'>
                   <h2>Catch{category} with an Adventure Guide</h2>
                   <p>Walking, lifting weights, doing chores – it’s all good. Regardless of what you do, regular exercise and physical activity is the path to health and well-being. </p>
                   <div className='date5'>{category}<span>/ November 17 2021</span></div>
                   </div>
            </div>

            </div>
            <div className='common17'>
            <div className='box51'>
            <div className='one5'>
               <img src={nature3} alt='bollywood'></img>
               <div className='last'>
               <h2>Catch{category} with an Adventure Guide</h2>
               <p>Hindi cinema, often known as Bollywood and formerly as Bombay cinema,[4] is the Indian Hindi-language film industry based in Mumbai. </p>
               <div className='date5'>{category} <span>/ November 17 2021</span></div>
               </div>
            </div>
            </div>
            </div>
            </div>




            <div className='common18'>
               <img src={latest4} alt='latest'></img>
               <h3>Catch {category} with an Adventure Guide</h3>
               <div className='date55'>{category} <span>/ November 17 2021</span></div>
               <hr/>
               <div className='lastbox'>
               <img src={nature3} alt='edge'></img>
               <div className='tired'><h3>Catch {category} with an Adventure Guide</h3>
               <div className='date55'>{category} <span>/ November 17 2021</span></div>
               </div>
               </div>
               <div className='lastbox'>
               <img src={nature3} alt='edge'></img>
               <div className='tired'><h3>Catch {category} with an Adventure Guide</h3>
               <div className='date55'>{category}<span>/ November 17 2021</span></div>
               </div>
               </div>
               <div className='lastbox'>
               <img src={nature3} alt='edge'></img>
               <div className='tired'><h3>Catch {category} with an Adventure Guide</h3>
               <div className='date55'>{category} <span>/ November 17 2021</span></div>
               </div>
               </div>
               <div className='lastbox'>
               <img src={nature3} alt='edge'></img>
               <div className='tired'><h3>Catch{category} with an Adventure Guide</h3>
               <div className='date55'>{category} <span>/ November 17 2021</span></div>
               </div>
               </div>
            </div>
            
            
            
            <div className='common19'><h2>Advertisemnet</h2></div>
          </div>
          <div className='load55'><span><AiOutlineArrowDown /></span>  ..LOAD MORE</div>
      </div>
    
    )
  
}

export default withRouter(Common)
