import { User } from "../../types";

const BASE_URL = "http://127.0.0.1:8090/";
const USERS_API = "api/collections/users/records";

export async function getUsers(): Promise<User[]> {
  const response = await fetch(`${BASE_URL}${USERS_API}`);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  const data = await response.json();
  return data.items || [];
}

export async function getUserById(userId: string): Promise<User | null> {
  const filterExpression = `?filter=(id='${userId}')`;
  const response = await fetch(`${BASE_URL}${USERS_API}${filterExpression}`);
  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }
  const data = await response.json();
  return data.items[0] || [];
}

export async function createUser(userData: User): Promise<User> {
  const response = await fetch(`${BASE_URL}${USERS_API}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }

  return await response.json();
}

export async function updateUser(userData: User): Promise<Number> {
  const response = await fetch(`${BASE_URL}${USERS_API}/${userData.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error("Failed to create user");
  }
  return await response.json();
}

export async function deleteUser(userId: number): Promise<void> {
  const response = await fetch(`${BASE_URL}${USERS_API}/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete the user");
  }

  return;
}
