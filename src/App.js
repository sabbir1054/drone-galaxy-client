
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route  path="/login">
            <Login></Login>
          </Route>
          <Route  path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
