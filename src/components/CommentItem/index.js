import React, { useState } from "react";
import arrow from "../../assets/img/arrow-down.svg";
import { URL } from "../../utils/const";
const CommentItem = ({ data }) => {
  const [showSubComments, setShowSubComments] = useState([]);
  const [isOpenComment, setOpenComments] = useState(false);

  const handlerSubComments = async (kids = []) => {
    if (isOpenComment) return;
    if (kids.length) {
      const subComments = await Promise.all(
        kids.map((commentId) => {
          return fetch(`${URL}item/${commentId}.json`).then((data) =>
            data.json()
          );
        })
      );
      setShowSubComments(subComments);
      setOpenComments(true);
    }
  };

  return (
    <>
      {data?.dead || data?.deleted ? null : (
        <div onClick={() => handlerSubComments(data?.kids)} className="comment">
          <div className="comment__text">
            <p dangerouslySetInnerHTML={{ __html: data.text }} />
            {data?.kids && (
              <div className="comment__img">
                <img
                  alt="иконка открыть ответы на комментарий"
                  src={arrow}
                  style={{ width: 20, marginLeft: 20 }}
                />
              </div>
            )}
          </div>
          {!!showSubComments.length &&
            showSubComments.map((comm) => (
              <CommentItem key={comm.id} data={comm} />
            ))}
        </div>
      )}
    </>
  );
};

export default CommentItem;
