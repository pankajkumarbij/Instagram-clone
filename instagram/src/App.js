import {useEffect,createContext,useReducer,useContext} from 'react';
import './App.css';
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/screens/home';
import Profile from './components/screens/profile';
import Login from './components/screens/login';
import Signup from './components/screens/signup';
import Createpost from './components/screens/createpost';
import {reducer,initialState} from './reducers/userreducer';

export const UserContext=createContext();
 
const Routing=()=>{
  const history=useHistory();
  const {state,dispatch} = useContext(UserContext);
  useEffect(()=>{
    const user=localStorage.getItem("user");
    if(user){
      dispatch({type:"USER",payload:user});
    }
    else{
      history.push('/login');
    }
  },[])
   return(
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/createpost">
          <Createpost />
        </Route>
      </Switch>
   )
}

function App() {
  const [state,dispatch]=useReducer(reducer,initialState);
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
