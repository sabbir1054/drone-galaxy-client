
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
import MyOrder from './Pages/DashBoard/UserPanel/MyOrders/MyOrder';
import AddReview from './Pages/DashBoard/UserPanel/Review/AddReview';
import PaymentProcedure from './Pages/DashBoard/UserPanel/PaymentProcedure/PaymentProcedure';


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
          <PrivateRoute exact path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/manageAllOrders">
            <ManageAllOrders></ManageAllOrders>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addProduct">
            <AddProduct></AddProduct>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/manageAllProducts">
            <ManageAllProducts></ManageAllProducts>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/myOrders">
            <MyOrder></MyOrder>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/feedback">
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/payment">
            <PaymentProcedure></PaymentProcedure>
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
