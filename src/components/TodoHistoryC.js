import React, { useState } from "react";
import "../style/TodoHistoryC.scss";
import { AiOutlineDelete } from "react-icons/ai";

const TodoHistoryC = (props) => {
  const { jina, jiwarItem } = props;

  // console.log(jina.date);

  return (
    <div className="TodoHistoryC">
      <div className="todo">
        <div className="date">{jina.date}</div>
        <div className="text">{jina.text}</div>
      </div>
      <div className="jiwar" onClick={() => jiwarItem(jina.id)}>
        <AiOutlineDelete />
      </div>
    </div>
  );
};

export default TodoHistoryC;
