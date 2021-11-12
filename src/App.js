
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
import Purchase from './Pages/Purchase/Purchase';
import Payment from './Pages/Payment/Payment';
import DashBoard from './Pages/DashBoard/DashBoard';
import MakeAdmin from './Pages/DashBoard/AdminPanel/MakeAdmin/MakeAdmin';
import ManageAllOrders from './Pages/DashBoard/AdminPanel/ManageAllOrders/ManageAllOrders';
import ManageAllProducts from './Pages/DashBoard/AdminPanel/ManageProducts/ManageAllProducts';
import AddProduct from './Pages/DashBoard/AdminPanel/ManageProducts/AddProduct';


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
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <PrivateRoute path="/purchases/:productId">
            <Purchase></Purchase>
          </PrivateRoute>
          <PrivateRoute path="/payment">
            <Payment></Payment>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/manageAllOrders">
            <ManageAllOrders></ManageAllOrders>
          </PrivateRoute>
          <PrivateRoute path="/addProduct">
            <AddProduct></AddProduct>
          </PrivateRoute>
          <PrivateRoute path="/manageAllProducts">
            <ManageAllProducts></ManageAllProducts>
          </PrivateRoute>
          <Route path="/*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
