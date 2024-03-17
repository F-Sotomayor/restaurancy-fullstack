import express from "express";
import restaurantsRouter from "./routes/restaurants";

const app = express();

app.use(express.json());

const PORT = 5050;

app.use((_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use("/api/restaurants", restaurantsRouter);
app.use("/api/restaurant/:id", restaurantsRouter)


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
