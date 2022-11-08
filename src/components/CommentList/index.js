import React, { useEffect } from "react";

import CommentItem from "../CommentItem";
import { useSelector } from "react-redux";
import ListLoader from "../Loaders/ListLoader";

const CommentList = () => {
  const { loading } = useSelector((state) => state.loaderReducer);
  const { comments } = useSelector((state) => state.commentsReducer);
  useEffect(() => {}, [comments]);

  return (
    <div className="wrapper-commentlist">
      {loading
        ? [...new Array(3)].map((_, index) => <ListLoader key={index} />)
        : comments.map((comm) => <CommentItem key={comm.id} data={comm} />)}
    </div>
  );
};

export default CommentList;
