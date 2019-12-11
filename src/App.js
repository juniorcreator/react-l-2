import React from "react";
import Registration from "./components/Registration/Registration";
import Fun from "./components/Fun/Fun";
import "./App.scss";

class App extends React.Component {
  state = {
    isRegistered: false
  };
  handleHideFun = () => {
    setTimeout(() => {
      this.setState({ isRegistered: false });
    }, 5000);
  };
  handleShowFun = () => {
    this.setState({ isRegistered: true });
    this.handleHideFun();
  };
  render() {
    return (
      <div className="container">
        {this.state.isRegistered && <Fun />}
        <h1>Lesson 2 Formik forms</h1>
        <Registration handleShowFun={this.handleShowFun} />
      </div>
    );
  }
}

export default App;
