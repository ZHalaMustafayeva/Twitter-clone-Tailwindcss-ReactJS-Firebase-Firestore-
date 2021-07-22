import React, { useEffect, useState } from "react";
import Divider from "../components/Divider";
import FeedList from "../components/FeedList";
import TweetBox from "../components/TweetBox";
import db from "../firebase";
import { PopulerIcon } from "../icons/Icon";

const Content = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    db.collection("feed")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setTweets(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
      <header className="sticky top-0 z-10 bg-white flex justify-between items-center p-4 border-b border-gray-extraLight ">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <PopulerIcon className="w-6 h-6 text-primary2-base" />
      </header>
      <div className="flex space-x-4 px-4 py-3">
        <img
          src="https://images.unsplash.com/photo-1542996966-2e31c00bae31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="Profile"
          className="w-11 h-11 rounded-full object-cover"
        />
        <TweetBox />
      </div>
      <Divider />

      {/* Feed */}
      <FeedList tweets={tweets} />
    </main>
  );
};

export default Content;