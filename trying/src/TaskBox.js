import React from "react";
import "./TaskBox.css";

function TaskBox({ text, id, addNode, deleteNode }) {
  function deleteingNode() {
    deleteNode(id);
  }
  return (
    <div className="taskbox">
      <div className="taskbox_line_2"></div>
      <div className="taskbox_task">
        <p>{text}</p>
        <button onClick={deleteingNode} className="taskbox_delete_btn">
          <img alt="dustin" src="./dustbin.png" />
        </button>
      </div>
      <div className="taskbox_line_1"></div>
      <button onClick={addNode} className="taskbox_add_btn">
        +
      </button>
      <div className="taskbox_line_2"></div>
    </div>
  );
}

export default TaskBox;
