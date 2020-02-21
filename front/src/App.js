import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact_us /contact_us";
import Gallery from "./pages/gallery/gallery";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  getCollectionList = async () => {
    try {
      const response = await fetch("http://localhost:8080/product");
      const result = await response.json();
      if (result.success) {
        this.setState({ products: result, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };
  async componentDidMount() {
    this.getCollectionList();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/gallery" component={Gallery} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
