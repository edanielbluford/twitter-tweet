import React, { Component } from "react";
import Avatar from "./Avatar";
import Message from "./Message";
import NameWithHandle from "./NameWithHandle";
import ReplyButton from "./ReplyButton";
import RetweetButton from "./RetweetButton";
import LikeButton from "./LikeButton";
import MoreOptions from "./MoreOptions";
import Time from "./Time";

function formatDate(date) {
  return date.toLocaleDateString();
}

const testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
    handle: "catdad",
    name: "I have to many cats at home!"
  },
  likes: 2,
  retweets: 0,
  time: formatDate(new Date())
};

class Tweet extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='tweet'>
        <Avatar {...testTweet} />
        <div className='content'>
          <NameWithHandle {...testTweet} />
          <Time {...testTweet} />
          <Message {...testTweet} />
          <div className='buttons'>
            <ReplyButton {...testTweet} />
            <RetweetButton {...testTweet} />
            <LikeButton {...testTweet} />
            <MoreOptions {...testTweet} />
          </div>
        </div>
      </div>
    );
  }
}

export default Tweet;
