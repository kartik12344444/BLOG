
import './App.css';
import Tophead from './header/tophead';
import Navbar from './header/navbar';
import Common from './Common/Common'
import Reactpage from './Reactpage/Reactpage';
import {Switch,Route} from 'react-router-dom'
import Home from './Home/Home';
import Login from './Login/Login';



function App() {
  return (
    <div className="App">
      <Tophead />
      <Navbar />
      <Switch>
          <Route path="/" exact>            <Home />       </Route>
          <Route path='/Login' exact>       <Login />      </Route>
          <Route path='/:category' exact>   <Common />     </Route>
          <Route path='/travel/blog' exact> <Reactpage />  </Route>
       
      </Switch>
    </div>
  );
}

export default App;
