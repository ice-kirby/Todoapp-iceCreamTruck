import React, { useState, useEffect } from "react";
import "../style/TodoHistory.scss";
import TodoHistoryC from "./TodoHistoryC";

const TodoHistory = (props) => {
  const { jinan, jiwarItem } = props;
  const [filter, setFilter] = useState([...jinan]);
  const [wall, setWall] = useState("");

  function clickWall(e) {
    setWall(e.target.value);
  }

  useEffect(() => {
    setFilter(jinan.filter((it) => it.date.slice(0, 7) === wall));
  }, [wall, jinan]);

  return (
    <div className="TodoHistory">
      <div className="momo">
        <input type="month" onChange={clickWall} />
        <div>내가 해냄</div>
      </div>
      {filter.map((jo) => (
        <TodoHistoryC jina={jo} key={jo.id} jiwarItem={jiwarItem} />
      ))}
    </div>
  );
};

export default TodoHistory;
