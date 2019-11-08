import React, { Component } from "react";

class RetweetButton extends Component {
  render() {
    return (
      <i className='fa fa-retweet retweet-button'>
        <span>{this.props.retweets}</span>
      </i>
    );
  }
}

export default RetweetButton;
