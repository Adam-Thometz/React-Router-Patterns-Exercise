import {Switch, Route} from 'react-router-dom'
import Arithmetic from './Arithmetic';
import Calculator from './Calculator';
import {Redirect} from 'react-router-dom'

function Routes() {
  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/">
          <Calculator />
        </Route>
        <Route path="/:operation/:num1/:num2">
          <Arithmetic />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;
