import React from "react";
import { useState, useEffect } from "react";

export const Table = () => {
  const SIMPLE = {
    textDecoration: "line-through",
    color: "#ccc",
  };

  const CHANGES = {
    textDecoration: "none",
    color: "#000",
  };

  const [data, setData] = useState([]);
  const [isComplete, setIsComplete] = useState(SIMPLE);

  console.log(isComplete);

  // useEffect(() => {
  //   const modeToggle = () => {
  //     if(isComplete === SIMPLE) {
  //      return setData(CHANGES)
  //     }
  //   };
  // }, [isComplete]);

  fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((data) => setData(data));

  return (
    <div className="todo-list">
      <div className="todo-item">
        <div className="checker">
          <span className="">
            <input type="checkbox" />
          </span>
        </div>
        <span>Create theme</span>
        <a href="javascript:void(0);" className="float-right remove-todo-item">
          <i className="icon-close"></i>
        </a>
      </div>
      <div className="todo-item">
        <div className="checker">
          <span className="">
            <input type="checkbox" />
          </span>
        </div>
        <span>Work on wordpress</span>
        <a href="javascript:void(0);" className="float-right remove-todo-item">
          <i className="icon-close"></i>
        </a>
      </div>

      <div className="todo-item">
        <div className="checker">
          <span className="">
            <input type="checkbox" />
          </span>
        </div>
        <span>Organize office main department</span>
        <a href="javascript:void(0);" className="float-right remove-todo-item">
          <i className="icon-close"></i>
        </a>
      </div>
      {data.length > 0 &&
        data.map((el, idx) => {
          return (
            <>
              <div key={idx} className="todo-item">
                <div className="checker">
                  <span
                    className=""
                  >
                    <input type="checkbox" />
                  </span>
                </div>
                <span>{el.task}</span>
                <a
                  href="javascript:void(0);"
                  className="float-right remove-todo-item"
                >
                  <i className="icon-close"></i>
                </a>
              </div>
            </>
          );
        })}
    </div>
  );
};
