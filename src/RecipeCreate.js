import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  
  const [formData, setFormData] = useState({...initialFormState});
  
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData(initialFormState)
  }
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [rating, setRating] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input name="name" placeholder="Name" type="text" onChange={handleChange} required="true" value={formData.name} ></input></td>
            <td><input name="cuisine" placeholder="Cuisine" type="text" onChange={handleChange} required="true" value={formData.cuisine} ></input></td>
            <td><input name="photo" placeholder="URL" type="text" onChange={handleChange} required="true" value={formData.photo} ></input></td>
            <td><textarea name="ingredients" placeholder="Ingredients" rows="2" onChange={handleChange} required="true" value={formData.ingredients} ></textarea></td>
            <td><textarea name="preparation" placeholder="Preparation" rows="2" onChange={handleChange} required="true" value={formData.preparation} ></textarea></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
