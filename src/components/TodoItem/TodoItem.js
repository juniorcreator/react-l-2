import React from "react";
const TodoItem = ({
  toDos,
  handleDeleteToDo,
  handleEdit,
  handleChangeItemName,
  handleSaveItem,
  handleDoneItem
}) => {
  return (
    <React.Fragment>
      {toDos.map((item, index) => {
        return (
          <tr className="table__row" key={item.id}>
            <th className="table__number" scope="row">
              {index + 1}
            </th>
            <td className="table__content">
              {item.isEdit ? (
                <input
                  onChange={e => handleChangeItemName(item.id, e.target.value)}
                  value={item.text}
                  className="table__input"
                  type="text"
                />
              ) : (
                <span
                  className={item.done ? "table__span done" : "table__span"}
                >
                  {item.text}
                </span>
              )}
            </td>
            <td>
              <button
                onClick={() => handleDeleteToDo(item.id)}
                type="button"
                className="btn btn-outline-danger"
              >
                Delete
              </button>
              {item.isEdit ? (
                <button
                  onClick={() => handleSaveItem(item.id)}
                  type="button"
                  className="m-1 btn btn-outline-warning"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(item.id)}
                  type="button"
                  className="m-1 btn btn-outline-info"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => handleDoneItem(item.id)}
                type="button"
                className="btn btn-outline-success"
              >
                {item.done ? "Undone" : "Done"}
              </button>
            </td>
          </tr>
        );
      })}
    </React.Fragment>
  );
};
export default TodoItem;
