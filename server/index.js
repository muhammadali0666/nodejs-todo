const http = require("http")
const {read_file, write_file} = require("./fs/api")
const {v4} = require("uuid")

const PORT = process.env.PORT || 3000
const options = {"content-type": "aplication/json", "Access-Control-Allow-Origin": "*"}

const server = http.createServer((req, res) => {
  if(req.method === "GET") {
    if(req.url === "/users") {
      const result = read_file("users.json")

      res.writeHead(200, options)
      res.end(JSON.stringify(result))
    }
  }

  if (req.method === "POST") {
    if (req.url === "/users_post") {
      req.on("data", (chunk) => {
        let data = JSON.parse(chunk);

        let users = read_file("users.json");

        users = [
          ...users,
          {
            id: v4(),
            ...data,
          },
        ];
        write_file("users.json", users);
        res.writeHead(201, options);
        res.end(
          JSON.stringify({
            msg: "Added new task!",
          })
        );
      });
    }
  }



})

server.listen(PORT, () => {
  console.log("Server is runnig on 3000");
})