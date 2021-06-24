import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
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

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <main>
          <Container>
            <Route path="/dashboard" exact component={DashboardScreen}></Route>
            <Route path="/register" exact component={RegisterScreen}></Route>
            <Route path="/login" exact component={LoginScreen}></Route>
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="/cart/:id?" component={CartScreen}></Route>
            <Route path="/" exact component={HomeScreen}></Route>
          </Container>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
