import React, { useState } from "react";

function ToyForm() {
  const [nameInput, setNameInput] = useState("")
  const [imageInput, setImageInput] = useState("")

  return (
    <div className="container">
      <form className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={imageInput}
          onChange={(e) => setImageInput(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
