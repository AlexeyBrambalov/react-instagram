import React, { Component } from "react";
import Post from "./Post";

export default class Posts extends Component {
  render() {
    return (
      <div className="left">
        <Post
          alt="nature"
          src="http://www.youandthemat.com/wp-content/uploads/nature-2-26-17.jpg"
        />
        <Post
          alt="nature"
          src="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      </div>
    );
  }
}
