import "bootstrap/dist/css/bootstrap.min.css";
// js and styles
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";
import "./App.css";
import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import DashboardScreen from "./screens/DashboardScreen";
import DashboardHomeScreen from "./components/Dashboard/screens/DashboardHomeScreen";
import UserProfileScreen from "./components/Dashboard/screens/UserProfileScreen";
import Githup from "./screens/Githup";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <main>
          <Container>
            <Route path="/github" exact component={Githup}></Route>
            <Route path="/register" exact component={RegisterScreen}></Route>
            <Route path="/login" exact component={LoginScreen}></Route>
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="/cart/:id?" component={CartScreen}></Route>
            <Route path="/" exact component={HomeScreen}></Route>
          </Container>
          <Route
            path="/dashboard"
            exact
            component={(props) => (
              <DashboardScreen {...props}>
                <DashboardHomeScreen></DashboardHomeScreen>
              </DashboardScreen>
            )}
          ></Route>
          <Route
            path="/dashboard/user-profile"
            exact
            component={(props) => (
              <DashboardScreen {...props}>
                <UserProfileScreen></UserProfileScreen>
              </DashboardScreen>
            )}
          ></Route>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
