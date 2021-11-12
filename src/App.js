
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import Home from './Pages/HomePage/Home/Home';
import Explore from './Pages/Explore/Explore';
import Login from './Pages/Login/Login';

import Register from './Pages/Register/Register';
import Header from './Pages/Shared/Header/Header';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import NoMatch from './Pages/NoMatch/NoMatch';
import Footer from './Pages/Shared/Footer/Footer';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/explore">
            <Explore></Explore>
          </PrivateRoute>
          <Route path='/*'> 
            <NoMatch></NoMatch>
         </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
