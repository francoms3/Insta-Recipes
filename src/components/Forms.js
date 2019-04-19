import React from 'react';

// stateless functional Component
// creates input fields and search button
const Form = props =>
(
  <form onSubmit = {props.getRecipe} style={{ marginBottom:"2rem" }}>
    <input className="form__input" type="text" name="recipeName"/>
    <button className="form__button"> Search </button>
  </form>
);



export default Form;
