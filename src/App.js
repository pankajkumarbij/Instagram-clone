
import React from 'react';
import "./App.css";
import  Navbar from './component/navbar';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './component/screens/home';
import Login from './component/screens/login';
import Signup from './component/screens/signup';
import Profile  from './component/screens/profile';
import Createpost from './component/screens/createpost';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Route exact  path="/">
      <Home />
    </Route>
    <Route path="/signup">
      <Signup />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/profile">
      <Profile />
    </Route>
    <Route path="/createpost">
      <Createpost/>
    </Route>
    </BrowserRouter>
     
  );
}

export default App;
