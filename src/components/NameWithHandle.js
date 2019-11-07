import React, { Component } from "react";

class NameWithHandle extends Component {
  render() {
    return (
      <span className='name-with-handle'>
        <span className='name'>{this.props.author.name}</span>
        <span className='handle'>@{this.props.author.handle}</span>
      </span>
    );
  }
}

export default NameWithHandle;
