import React from "react";

const UserBox = () => {
  return (
    <div className="flex justify-between items-center mb-6 hover:bg-primary2-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200">
      <img
        src="https://images.unsplash.com/photo-1542996966-2e31c00bae31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt="Profile"
        className="w-11 h-11 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <span className="font-bold text-md text-black">Zhala Mustafayeva...</span>
        <span className="text-sm text-gray-dark">@Zhala</span>
      </div>

      <div className="flex space-x-1">
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
      </div>
    </div>
  );
};

export default UserBox;