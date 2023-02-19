import { useState,useEffect } from "react";
import { Navbar } from "./components/navbar";
import { Table } from "./components/table";

function App() {

  const [data, setData] = useState("")

  // console.log(data);

  useEffect(() => {
    document.getElementById("input")?.addEventListener("keypress", function (e) {
      console.log(e);
    })
  })


  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-white">
              <div className="card-body">
                <form action="javascript:void(0);">
                  <input
                    type="text"
                    className="form-control add-task"
                    placeholder="New Task..."
                    id="input"
                    value={data}
                    onChange={(e) => {
                      setData(e.target.value)
                    }}
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
}

export default App;
