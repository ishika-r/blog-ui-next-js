import Link from "next/link";
import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const CommentWrapper = () => {
  return (
    <div className="pt-5 comment-wrap">
      <h3 className="mb-5 heading">6 Comments</h3>
      <CommentList />
      {/* END comment-list */}
      <CommentForm />
    </div>
  );
};

export default CommentWrapper;
