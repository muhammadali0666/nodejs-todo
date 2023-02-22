import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
import { v4 as uuidv4 } from "uuid";

export const Table = () => {
  const [data, setData] = useState([]);

  const [complete, setComplete] = useState([]);

  if(data.val === false) {
    setComplete()
  }

  const handleClick = () => {};

  // console.log(data);
  console.log(complete);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setData(data));
      setComplete(data)
  }, []);

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
        <span value={complete} onClick={handleClick()}>
          Organize office main department
        </span>
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
                  <span
                    className=""
                    onClick={() => {
                      handleClick();
                    }}
                  >
                    <input
                      id={`${uuidv4()}`}
                      className="throw__line"
                      type="checkbox"
                      value={complete}
                      // onClick={(e) => {
                      //   setComplete(e.target.value)
                      // }}
                    />
                    {/* {uuidv4()} */}
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
