import React, { Component } from "react";

class RetweetButton extends Component {
  render() {
    return (
      <i className='fa fa-retweet retweet-button'>
        <div>{this.props.retweets}</div>
      </i>
    );
  }
}

export default RetweetButton;
