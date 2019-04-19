import React, { Component } from 'react';
import './App.css';
import Form from "./components/Forms.js";
import Recipes from "./components/Recipes.js"

const API_KEY = "73998dbb96a0c8787ba1602883f38a80";

class App extends Component
{
  // defining states
  state =
  {
    recipes: []
  }

  // Handles calls to the API
  getRecipe = async (e) =>
  {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
    const data = await api_call.json();

    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }

  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Instant Recipes</h1>
        </header>
        <Form getRecipe = {this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
