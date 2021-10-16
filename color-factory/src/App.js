import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'
import MainColorPage from './MainColorPage';
import NewColorForm from './NewColorForm';
import ColorPage from './ColorPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/colors">
          <MainColorPage />
        </Route>
        <Route exact path="/colors/new">
          <NewColorForm />
        </Route>
        <Route path="/colors/:color">
          <ColorPage />
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </div>
  );
}

export default App;
