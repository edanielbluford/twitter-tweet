import React, { Component } from "react";

class LikeButton extends Component {
  render() {
    return (
      <i className='fa fa-heart like-button'>
        <span>{this.props.likes}</span>
      </i>
    );
  }
}

export default LikeButton;
