import React, { Component } from "react";
import Header from "./components/Header";
import Tweet from "./components/Tweet";
import Clicker from "./components/Clicker/Clicker";
import ClickerHeader from "./components/Clicker/ClickerHeader";
import ChangeState from "./components/ChangeState/ChangeState";
import "./style/index.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "React Clicker"
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Tweet />
        <ChangeState />
        <div>
          <ClickerHeader title={this.state.title} />
          <div>
            <Clicker />
          </div>
        </div>
      </div>
    );
  }
}
