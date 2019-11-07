import React, { Component } from "react";

class Header extends Component {
  render() {
    return <div>hello, {this.props.name}</div>;
  }
}

export default Header;
