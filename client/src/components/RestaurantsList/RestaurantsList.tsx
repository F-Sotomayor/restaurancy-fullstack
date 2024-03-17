import { Button, Grid, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useRestaurants from "../../hooks/useRestaurants";
import { Restaurant } from "../../../types";
import { useEffect, useState } from "react";

export default function RestaurantsList() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const { fetchAllRestaurants, error, loading } = useRestaurants();

  useEffect(() => {
    fetchAllRestaurants().then(setRestaurants);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) return <div>Error</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <Grid>
      {restaurants.map((restaurant) => {
        return (
          <Stack maxW={300} key={restaurant.id}>
            <div>{restaurant.userName}</div>
            <Link to={`restaurant/o7sktlm420ffn1a`}>
              <Button>Go</Button>
            </Link>
          </Stack>
        );
      })}
    </Grid>
  );
}
