import { useState } from "react";
import { Navbar } from "../../components/navbar";
import { Table } from "../../components/table";
// import { useState, useEffect } from "react";

export const Home = () => {

  const [val, setVal] = useState(false)

  const createCouse = (e) => {
    e.preventDefault();

    const { task } = e.target;

    fetch("http://localhost:3000/users_post", {
      method: "POST",
      body: JSON.stringify({
        task: task.value,
        val: val
      }),
    }).then((res) => res.json());
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-white">
              <div className="card-body">
                <form
                  action="javascript:void(0);"
                  onSubmit={(e) => createCouse(e)}
                >
                  <input
                    type="text"
                    className="form-control add-task"
                    placeholder="New Task..."
                    id="input"
                    name="task"
                  />
                </form>
                <Navbar />
                <Table />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
