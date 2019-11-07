import React, { Component } from "react";

class LikeButton extends Component {
  render() {
    return (
      <i className='fa fa-heart like-button'>
       <div>{this.props.likes}</div>
      </i>
     
    );
  }
}

export default LikeButton;
