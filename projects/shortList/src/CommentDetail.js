// Component will work with listing for basic screen.
import React from "react";

const CommentDetail = props => {
  console.log(props)
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img  src={props.imgInfo} alt="user avatar"/>
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
      <div className="metadata">
        <span className="date"> {props.someTime}</span>
      </div>
      <div className="text">{props.comment}</div>
      </div>
    </div>
  )
}

export default CommentDetail;
