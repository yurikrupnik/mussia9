import app from "./app";

app.get("/api", (req, res) => {
  res.send({ message: "Welcome to userssss!" });
});

console.log("process.env.port", process.env.port);
const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on("error", console.error);
