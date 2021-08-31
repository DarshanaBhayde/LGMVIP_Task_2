import { Route, Switch } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Users from './Components/Users';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/users' component={Users} />
      </Switch>
    </>
  );
}

export default App;