import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";

import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <div className="content-container">
            <Route path="/cart" component={Cart} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Route to="/not-found" />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
