import React from "react";
import Table from "./components/Table/Table";
import AddToDo from "./components/AddToDo/AddToDo";
import "./App.scss";

class App extends React.Component {
  state = {
    toDos: [{ id: 1, text: "Example text 1", isEdit: false, done: false }],
    addInputValue: "",
    inputTouched: false,
    inputMinLength: 4
  };
  setItemsFromLocalStorage = () => {
    let toDos = JSON.parse(localStorage.getItem("toDos")) || [];
    if (toDos.length) {
      this.setState({ toDos });
    }
  };
  handleNewItemName = value => {
    this.setState({ addInputValue: value, inputTouched: true });
  };
  setItemsToLocalStorage = () => {
    localStorage.setItem("toDos", JSON.stringify(this.state.toDos));
  };
  componentDidMount() {
    this.setItemsFromLocalStorage();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    this.setItemsToLocalStorage();
  }
  handleDeleteToDo = id => {
    let toDos = [...this.state.toDos];
    toDos.splice(
      this.state.toDos.findIndex(item => item.id === id),
      1
    );
    this.setState({ toDos });
  };
  handleEdit = id => {
    let toDos = [...this.state.toDos];
    toDos[toDos.findIndex(item => item.id === id)].isEdit = true;
    toDos[toDos.findIndex(item => item.id === id)].done = false;
    this.setState({ toDos });
  };
  handleChangeItemName = (id, value) => {
    let toDos = [...this.state.toDos];
    let itemId = toDos.findIndex(item => item.id === id);
    toDos[itemId].text = value;
    this.setState({ toDos });
  };
  handleAddToDo = () => {
    let { addInputValue } = this.state;
    if (addInputValue.length >= 4) {
      let toDos = [...this.state.toDos];
      toDos.push({
        id: Date.now(),
        text: addInputValue,
        isEdit: false,
        done: false
      });
      this.setState({ toDos, addInputValue: "", inputTouched: false });
    } else {
      this.setState({ inputTouched: true });
    }
  };
  handleSaveItem = id => {
    let toDos = [...this.state.toDos];
    toDos[toDos.findIndex(item => item.id === id)].isEdit = false;
    this.setState({ toDos });
  };
  handleDoneItem = id => {
    let toDos = [...this.state.toDos];
    toDos[toDos.findIndex(item => item.id === id)].done = !toDos[
      toDos.findIndex(item => item.id === id)
    ].done;
    this.setState({ toDos });
  };
  render() {
    let { toDos, inputTouched, addInputValue, inputMinLength } = this.state;
    return (
      <div className="App container">
        <h1>
          Lesson 2 to do <br /> uses localstorage
        </h1>
        <AddToDo
          inputMinLength={inputMinLength}
          inputTouched={inputTouched}
          addInputValue={addInputValue}
          handleNewItemName={this.handleNewItemName}
          handleAddToDo={this.handleAddToDo}
        />
        {toDos.length ? (
          <Table
            handleDoneItem={this.handleDoneItem}
            handleSaveItem={this.handleSaveItem}
            handleChangeItemName={this.handleChangeItemName}
            handleDeleteToDo={this.handleDeleteToDo}
            handleAddToDo={this.handleAddToDo}
            handleEdit={this.handleEdit}
            toDos={toDos}
          />
        ) : (
          <div className="no-items">
            <p>Really...?</p>
            <img src="/img/sad.jpg" alt="img" />
          </div>
        )}
      </div>
    );
  }
}

export default App;
