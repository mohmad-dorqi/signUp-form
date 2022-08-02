
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { Route ,Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route  path="/login" component={Login}/>
        <Route path="/signup" component={SignUp} />

      </Switch>
       
    </div>
  );
}

export default App;
