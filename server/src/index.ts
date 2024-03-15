import express from "express";
import usersRouter from "./routes/users";

const app = express();

app.use(express.json());

const PORT = 5050;

app.use("/api/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
