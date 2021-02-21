import React, { useState } from "react";
import "./App.css";
import TaskBox from "./TaskBox.js";

export default function App() {
  let [tasks, taskSetter] = useState([]);

  function addNode() {
    let task;
    let array = [];
    if (confirm("Do you want to add two nodes ?")) {
      let i = 0;
      while (i < 2) {
        task = prompt(`enter your ${i === 0 ? "1st" : "2nd"} task`);
        if (task?.length <= 0) {
          alert("you cann't pass an empty task");
          i = 4;
        } else if (task) {
          array.push(task);
          i += 1;
        } else {
          i = 4;
        }
      }
    } else {
      task = prompt("You are adding only one node now.Enter your task");
      if (task?.length <= 0) {
        alert("you cann't pass an empty task");
      } else if (task) {
        array.push(task);
      }
    }

    taskSetter([...tasks, array]);
  }

  function deleteNode(id) {
    let newArray = [];

    for (let i = 0; i < tasks.length; i += 1) {
      if (id[0] === i) {
        for (let j = 0; j < tasks[i].length; j++) {
          if (j !== id[1]) {
            newArray.push([tasks[i][j]]);
          }
        }
      } else {
        newArray.push(tasks[i]);
      }
    }

    taskSetter(newArray);
  }

  return (
    <div className="app">
      {tasks.length < 1 ? (
        <div className="new">
          <button onClick={addNode}>Create a new Flow Chart</button>
        </div>
      ) : null}
      {tasks.map((taskarray, index1) => {
        return (
          <div className="taskRow">
            {taskarray?.map((text, index2) => {
              if (taskarray.length > 1 && index2 === 0) {
                return (
                  <div className="left_column">
                    <div className="left_column_connector">
                      <div className="bar"></div>
                    </div>
                    <TaskBox
                      text={text}
                      id={[index1, index2]}
                      addNode={addNode}
                      deleteNode={deleteNode}
                    />
                    <div className="left_column_connector">
                      <div className="bar"></div>
                    </div>
                  </div>
                );
              } else if (taskarray.length > 1 && index2 === 1) {
                return (
                  <div className="right_column">
                    <div className="right_column_connector">
                      <div className="bar"></div>
                    </div>
                    <TaskBox
                      text={text}
                      id={[index1, index2]}
                      addNode={addNode}
                      deleteNode={deleteNode}
                    />
                    <div className="right_column_connector">
                      <div className="bar"></div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <TaskBox
                    text={text}
                    id={[index1, index2]}
                    addNode={addNode}
                    deleteNode={deleteNode}
                  />
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
}
