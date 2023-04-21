import React from "react";

export const InputForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {};

  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit} onChange={handleChange} action="">
        <input type="text" />
        <button>
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </div>
  );
};
