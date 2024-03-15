import express, { Request, Response } from "express";
import * as usersServices from "../services/userServices";

const router = express.Router();

router.get("/", async (_req: Request, res: Response) => {
  try {
    const users = await usersServices.getUsers();
    res.send(users);
  } catch (error) {
    res.status(500).send({ error: (error as Error).message });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const newUser = await usersServices.createUser(req.body);
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send({ error: (error as Error).message });
  }
});

router.patch("/", async (req: Request, res: Response) => {
  try {
    const updatedUser = await usersServices.updateUser(req.body);
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(500).send({ error: (error as Error).message });
  }
});

router.delete("/", async (req: Request, res: Response) => {
  try {
    const deletedUser = await usersServices.deleteUser(req.body);
    res.status(204).send(deletedUser);
  } catch (error) {
    res.status(500).send({ error: (error as Error).message });
  }
});

export default router;
