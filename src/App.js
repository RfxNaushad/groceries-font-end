import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Admin from './components/Admin/Admin';
import Checkout from './components/Checkout/Checkout';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Header from './components/Header/Header';
import ManageProduct from './components/ManageProduct/ManageProduct';
import ShowManagement from './components/ShowManagement/ShowManagement';
import Notfound from './components/Notfound/Notfound';

export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  const [buyProduct, setbuyProduct] = useState({});
  return (
    <UserContext.Provider value = {{value :[loggedInUser, setLoggedInUser], value2 :[buyProduct, setbuyProduct]}}>
    <Router>
        <Switch>
          <Route exact path="/">
            <Header/>
            <Shop/>
          </Route>
          <Route path="/shop">
            <Header/>
            <Shop />
          </Route>
          <PrivateRoute path="/checkout/:_id">
            <Header/>
            <Checkout />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Header/>
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Header/>
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/manageproduct">
            <Header/>
            <ManageProduct />
          </PrivateRoute>
          <PrivateRoute path="/showmanagement">
            <Header/>
            <ShowManagement></ShowManagement>
          </PrivateRoute>
          <Route path="/login">
           <Header/>
           <Login></Login>
         </Route>
         <Route path="*">
               <Notfound></Notfound>
         </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
