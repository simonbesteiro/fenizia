import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import ProductListParent from "./components/ProductListParent";
import Cart from "./components/Cart";
import Register from "./components/Register";
import AboutUs from "./components/AboutUs";


function App(props) {
  return (
    <div className="container">
      <Header />
      <div className="margin-top">
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/login" exact component={Login} />
          <Route path="/novedades" exact component={ProductList} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/register" exact component={Register} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/:genre" exact component={ProductList} />
          <Route path="/infantil" exact component={ProductList}/>
          <Route path="/romantico" exact component={ProductList} />
          <Route path="/historia" exact component={ProductList} />
          <Route path="/cocina" exact component={ProductList} />
          <Route path="/ensayo" exact component={ProductList} />
          <Route path="/poesia" exact component={ProductList} />
          <Route path="/todos" exact component={ProductList} />
          {/* <Route component={PageNotFound} />  */}
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
