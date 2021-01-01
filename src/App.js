
import React,{useEffect,useContext,createContext,useReducer}  from 'react';
import "./App.css";
import  Navbar from './component/navbar';
import {BrowserRouter,useHistory, Route,Switch} from 'react-router-dom';
import Home from './component/screens/home';
import Signin from './component/screens/login';
import Signup from './component/screens/signup';
import Profile  from './component/screens/profile';
import Createpost from './component/screens/createpost';
import {reducer,initialState} from './reducers/usereducer';
export const UserContext =createContext();
const Routing=()=>{
  const history=useHistory();
  const {state,dispatch} = useContext(UserContext);
  useEffect(()=>{
    const user=localStorage.getItem("user");
    if(user){
      dispatch({type:"USER",payload:user})
    }
    else{
        history.push('/signin');
    }
  },[])
return(
  <Switch>
    <Route exact  path="/">
      <Home />
    </Route>
    <Route path="/signup">
      <Signup />
    </Route>
    <Route path="/signin">
      <Signin />
    </Route>
    <Route path="/profile">
      <Profile />
    </Route>
    <Route path="/createpost">
      <Createpost/>
    </Route>
  </Switch>
)
}
function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <Navbar />
    <Routing />
    </BrowserRouter>
    </UserContext.Provider>      
  );
}
export default App;
