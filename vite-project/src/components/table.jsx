import React from "react";
import { useState, useEffect } from "react";

export const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // console.log(data);

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
        data.map((el) => {
          return (
            <>
              <div className="todo-item">
                <div className="checker">
                  <span className="">
                    <input type="checkbox" />
                  </span>
                </div>
                <span>{el.name}</span>
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
