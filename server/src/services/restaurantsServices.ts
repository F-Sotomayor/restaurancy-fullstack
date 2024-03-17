import { Restaurant } from "../../types";

const BASE_URL = "http://127.0.0.1:8090/";
const RESTAURANTS_API = "api/collections/restaurants/records";

export async function getRestaurants(): Promise<Restaurant[]> {
  const response = await fetch(`${BASE_URL}${RESTAURANTS_API}`);
  if (!response.ok) {
    throw new Error("Failed to fetch restaurants");
  }
  const data = await response.json();
  return data.items || [];
}

export async function getRestaurantById(id: string): Promise<Restaurant | null> {
  const filterExpression = `?filter=(id='${id}')`;
  const response = await fetch(`${BASE_URL}${RESTAURANTS_API}${filterExpression}`);
  if (!response.ok) {
    throw new Error("Failed to fetch restaurant");
  }
  const data = await response.json();
  return data.items[0] || [];
}

export async function createRestaurant(restaurantData: Restaurant): Promise<Restaurant> {
  const response = await fetch(`${BASE_URL}${RESTAURANTS_API}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(restaurantData),
  });

  console.log(response)

  if (!response.ok) {
    throw new Error("Failed to create restaurant");
  }

  return await response.json();
}

export async function updateRestaurant(restaurantData: Restaurant): Promise<Number> {
  const response = await fetch(`${BASE_URL}${RESTAURANTS_API}/${restaurantData.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(restaurantData),
  });
  if (!response.ok) {
    throw new Error("Failed to update restaurant");
  }
  return await response.json();
}

export async function deleteRestaurant(body: Restaurant): Promise<void> {
  const response = await fetch(`${BASE_URL}${RESTAURANTS_API}/${body.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete the restaurant");
  }

  return;
}
