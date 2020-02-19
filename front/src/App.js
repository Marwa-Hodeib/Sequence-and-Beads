import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact_us /contact_us";
import Gallery from "./pages/gallery/gallery";

class App extends Component {
  // async componentDidMount() {
  //   const response = await fetch('http://localhost:8080/contacts');
  //   const result = await response.json();
  //   console.log(result);
  //   this.setState({ contacts: result, error: "none" });
  // }
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
