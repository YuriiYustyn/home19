
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { HashRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <Switch>
            <Route path="/"  exact><SignIn /> </Route>
            <Route path="/SignUp" ><SignUp /></Route>
            </Switch>
      </HashRouter>

      </header>
    </div>
  );
}

export default App;
