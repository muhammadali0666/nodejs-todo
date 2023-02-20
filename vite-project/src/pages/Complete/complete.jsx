import React from "react";
import { Navbar } from "../../components/navbar";

export const Complete = () => {
  return (
    <>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
