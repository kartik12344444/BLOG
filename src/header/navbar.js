import React, { Component } from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
export class Navbar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <div className='navbar'>
         <ul>
             <li className='extra'><Link to="/Login">Login</Link></li>
             <li><Link to="/Food">Food</Link></li>
             <li><Link class="active" to="/Fitness">Fitness</Link></li>
             <li><Link to="/Hollywood">Hollywood</Link></li>
             <li><Link to="/Technology">Technology</Link></li>
             <li><Link to="/Bollywood">Bollywood</Link></li>
             <li><Link to="/">Home</Link></li> 
             {/* <li><Link to="/Login">Login</Link></li> */}
         </ul>
         </div>
      </div>
    )
  }
}

export default Navbar;
