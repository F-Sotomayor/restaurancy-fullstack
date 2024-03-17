import { useState } from "react";

function useRestaurants() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const fetchAllRestaurants = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5050/api/users");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      setError(error as Error);
      throw new Error("Failed to fetch data");
    }
  };

  const fetchRestaurantById = async (id: string) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5050/api/users/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch restaurant by ID");
      }
      const data = await response.json();
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      setError(error as Error);
      throw new Error("Failed to fetch restaurant by ID");
    }
  };

  return { fetchAllRestaurants, fetchRestaurantById, loading, error };
}

export default useRestaurants;
