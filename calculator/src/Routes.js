import {Route} from 'react-router-dom'
import Arithmetic from './Arithmetic';
import Calculator from './Calculator';
import {Redirect} from 'react-router-dom'

function Routes() {
  return (
    <div className="Routes">
      <Route path="/">
        <Calculator />
      </Route>
      <Route exact path="/:operation/:num1/:num2">
        <Arithmetic />
      </Route>
      <Redirect to="/" />
    </div>
  );
}

export default Routes;
