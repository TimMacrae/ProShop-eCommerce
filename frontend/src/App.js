import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
//////////////////////////////
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <main className="py-5">
          <Container>
            <Route path="/" exact component={HomeScreen}></Route>
            <Route path="/product/:id" component={ProductScreen}></Route>
          </Container>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
