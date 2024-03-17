import express from "express";
import usersRouter from "./routes/users";

const app = express();

app.use(express.json());

const PORT = 5050;

app.use((_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use("/api/users", usersRouter);
app.use("/api/users/:id", usersRouter)


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
