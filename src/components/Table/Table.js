import React from "react";
import "./Table.scss";
import TodoItem from "../TodoItem/TodoItem";

const Table = ({
  handleAddToDo,
  toDos,
  handleDeleteToDo,
  handleEdit,
  handleChangeItemName,
  handleSaveItem,
  handleDoneItem
}) => {
  return (
    <table className="table table-dark">
      <thead className="table__thead">
        <tr>
          <th scope="col">Number</th>
          <th scope="col">Name todo</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <TodoItem
          handleDoneItem={handleDoneItem}
          handleSaveItem={handleSaveItem}
          handleChangeItemName={handleChangeItemName}
          handleEdit={handleEdit}
          handleAddToDo={handleAddToDo}
          toDos={toDos}
          handleDeleteToDo={handleDeleteToDo}
        />
      </tbody>
    </table>
  );
};

export default Table;
