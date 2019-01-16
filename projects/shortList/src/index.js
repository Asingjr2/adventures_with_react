import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
      <CommentDetail 
        author="Jane" 
        someTime="3PM" 
        imgInfo={faker.image.avatar()} 
        comment="some fancy comment"
      />
    </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Mary" 
          someTime="3PM" 
          imgInfo={faker.image.avatar()} 
          comment="some much fanicier comment" 
        />
      </ApprovalCard>

      
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.querySelector("#root")
);
