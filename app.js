const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Service is running 🚀");
  } else if (req.url === "/health") {
    res.end("OK");
  } else {
    res.end("Not found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});