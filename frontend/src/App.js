import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Container>
          <h1>Welcome to the Shop</h1>
        </Container>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;
