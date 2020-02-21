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
      this.state = { collection: [],
      test:"zeinab",
         error: "" };
    }
  // async componentDidMount() {
  //   const response = await fetch('http://localhost:8080/contacts');
  //   const result = await response.json();
  //   console.log(result);
  //   this.setState({ contacts: result, error: "none" });
  // }
  getCollectionList = async () => {
    try {
      const response = await fetch("http://localhost:8080/collection");
      const result = await response.json();
      if (result.success) {
        this.setState({ collection: result.result, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };
  async componentDidMount() {
    this.getCollectionList();
    //this.getImage
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/"  component={() => <Home test={this.state.collection} />} />
              <Route path="/about"  component={About} />
              <Route path="/contact" component={Contact} />
              <Route  path="/gallery" component={() => <Gallery test={this.state.collection} />} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
