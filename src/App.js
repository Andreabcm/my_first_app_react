import React, { Component } from "react";
import Header from "./components/header";
import Dish, { Flag } from "./components/dish";

import './styles/App.css';

class App extends Component {
  dish = "tortilla";
  dishes = ["Tortilla", "Paella", "Xató"];

  render() {
    return (
      <div className="App">
        <Header/>
        <Dish/>
        Me gusta la { this.dish }
        <ul>
          {this.dishes.map(dish => (
            <li>{dish}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
