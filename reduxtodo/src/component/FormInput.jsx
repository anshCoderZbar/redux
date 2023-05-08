import React, { useState } from "react";

export const FormInput = (props) => {
  const [title, setTitle] = useState("");

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    props.addTodoHandler({ title: title, id: Math.random() * 121 });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <div className="form-group ">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3 mb-5">
        Submit
      </button>
    </form>
  );
};
