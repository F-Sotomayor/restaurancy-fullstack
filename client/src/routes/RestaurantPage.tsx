import { Button, Heading, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import getIdFromURL from "../utils/getIdFromURL";
import useRestaurants from "../hooks/useRestaurants";
import { useEffect, useState } from "react";
import { Restaurant } from "../../types";

function RestaurantPage() {
  const [restaurantData, setRestaurantData] = useState<Restaurant>();
  const { fetchRestaurantById } = useRestaurants();
  const id = getIdFromURL();

  useEffect(() => {
    if (!id) return;
    fetchRestaurantById(id).then(setRestaurantData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Stack>
        <Heading>{restaurantData?.userName}</Heading>
      <Link to={`/`}>
        <Button>Home</Button>
      </Link>
    </Stack>
  );
}

export default RestaurantPage;
