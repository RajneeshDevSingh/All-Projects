import React from "react";

import "../Allcss/Comment.css";
const commentData = [
  {
    name: "Rajneesh",
    text: "ygvhj hbjhbkjb uhjhjh jvh vvjh ",
    replies: [{
      name: "First Copy",
      text: "ygvhj hbjhbkjb uhjhjh jvh vvjh ",
      replies: [],
    },
    {
      name: "Second Copy",
      text: "ygvhj hbjhbkjb uhjhjh jvh vvjh ",
      replies: [],
    },
    {
      name: "Third Copy",
      text: "ygvhj hbjhbkjb uhjhjh jvh vvjh ",
      replies: [],
    },],
  },
  {
    name: "ROOO",
    text: "ygvhj hbjhbkjb uhjhjh jvh vvjh ",
    replies: [],
  },
  {
    name: "GGGGG",
    text: "ygvhj hbjhbkjb uhjhjh jvh vvjh ",
    replies: [],
  },
  {
    name: "nnnn",
    text: "ygvhj hbjhbkjb uhjhjh jvh vvjh ",
    replies: [],
  },
];

const SingleComment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="SingleComment">
      <img
        className="commentIcon"
        alt="User"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="commnetdata">
        <p className="name">{name}</p>
        <p className="text">{text}</p>
      </div>
      {/* <div className="replies">
        <p>{replies}</p>
      </div> */}
    </div>
  );
};

const CommentsList = ({ Comments }) => {  
  return Comments.map((Comment, index) => (
    <div>
      <SingleComment data={Comment} key={index} />
      <div className="repliesCont">
        <CommentsList Comments={Comment.replies} />
 
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="CommentDiv">
      <h1 className="comment">Comments</h1>
      <CommentsList Comments={commentData} />
    </div>
  );
};

export default CommentContainer;
