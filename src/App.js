
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { Redirect, Route ,Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route  path="/login" component={Login}/>
        <Route path="/signup" component={SignUp} />
        <Redirect from='/' to='/login'/>

      </Switch>
       
    </div>
  );
}

export default App;
