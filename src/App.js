import React, {useEffect, createContext,useReducer} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/screens/Home';
import Profile from './components/screens/Profile';
import Signin from './components/screens/Signin';
import Signup from './components/screens/Signup';
import CreatePost from './components/screens/CreatePost';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const UserContext = createContext();

const history = useHistory()

// const Routing = () => {
//   return (
    
//   )
// }

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch> 
        <Route exact path="/" component={Home} /> 
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile} />
        <Route path="/create" component={CreatePost} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
