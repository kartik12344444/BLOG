
import './App.css';
import Tophead from './header/tophead';
import Navbar from './header/navbar';
import Common from './Common/Common'
import Reactpage from './Reactpage/Reactpage';
import {Switch,Route} from 'react-router-dom'
import Home from './Home/Home';
import Login from './Login/Login';
import Five from './Trial/Five'
import Four from './Trial/Four'
import Three from './Trial/Three'
import Two from './Trial/Two'
import One from './Trial/One'


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
          <Route path='/travel/blog/1' exact> <Five />  </Route>
          <Route path='/travel/blog/2' exact> <Four />  </Route>
          <Route path='/travel/blog/3' exact> <Three />  </Route>
          <Route path='/travel/blog/4' exact> <Two />  </Route>
          <Route path='/travel/blog/5' exact> <One />  </Route>
      </Switch>
    </div>
  );
}

export default App;
