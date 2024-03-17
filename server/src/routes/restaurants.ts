import express, { Request, Response } from "express";
import * as restaurantsServices from "../services/restaurantsServices";

const router = express.Router();

router.get("/", async (_req: Request, res: Response) => {
  try {
    const users = await restaurantsServices.getRestaurants();
    res.send(users);
  } catch (error) {
    res.status(500).send({ error: (error as Error).message });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  const restaurantId = req.params.id;
  try {
    const restaurant = await restaurantsServices.getRestaurantById(
      restaurantId
    );
    if (!restaurant) {
      return res.status(404).send({ error: "Restaurant not found" });
    }
    return res.send(restaurant);
  } catch (error) {
    return res.status(500).send({ error: (error as Error).message });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const newRestaurant = await restaurantsServices.createRestaurant(req.body);
    res.status(201).send(newRestaurant);
  } catch (error) {
    res.status(500).send({ error: (error as Error).message });
  }
});

router.patch("/", async (req: Request, res: Response) => {
  try {
    const updatedRestaurant = await restaurantsServices.updateRestaurant(
      req.body
    );
    res.status(200).send(updatedRestaurant);
  } catch (error) {
    res.status(500).send({ error: (error as Error).message });
  }
});

router.delete("/", async (req: Request, res: Response) => {
  try {
    const deletedRestaurant = await restaurantsServices.deleteRestaurant(
      req.body
    );
    res.status(204).send(deletedRestaurant);
  } catch (error) {
    res.status(500).send({ error: (error as Error).message });
  }
});

export default router;
