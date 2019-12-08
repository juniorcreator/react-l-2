import React from "react";
import "./AddToDo.scss";

const AddToDo = ({
  handleAddToDo,
  addInputValue,
  handleNewItemName,
  inputTouched,
  inputMinLength
}) => {
  let cls =
    addInputValue.length < inputMinLength && !inputTouched
      ? "form-control"
      : addInputValue.length < inputMinLength && inputTouched
      ? "form-control error"
      : "form-control valid";
  return (
    <div className="input-group mb-3 add-new">
      <input
        value={addInputValue}
        type="text"
        className={cls}
        placeholder="name to do"
        onChange={e => handleNewItemName(e.target.value)}
        onKeyDown={e => (e.key === "Enter" ? handleAddToDo() : null)}
      />
      <div className="invalid-feedback">Min length is {inputMinLength}</div>
      <div className="input-group-append">
        <button onClick={handleAddToDo} className="btn btn-outline-secondary">
          Add to do
        </button>
      </div>
    </div>
  );
};

export default AddToDo;
