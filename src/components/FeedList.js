import React from "react";
import FeedItem from "./FeedItems";

const FeedList = ({ tweets }) => {
  return (
    <div>
      {tweets.map((tweet, index) => (
        <FeedItem {...tweet} key={index} />
      ))}
    </div>
  );
};

export default FeedList;