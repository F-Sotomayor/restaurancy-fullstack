import { useState } from "react";
import Layout from "../components/HomeLayout/HomeLayout";
import RestaurantsList from "../components/RestaurantsList/RestaurantsList";

function HomePage() {
  const [, setSearchData] = useState<string>("");

  return (
    <Layout onSubmit={setSearchData}>
      <RestaurantsList />
    </Layout>
  );
}

export default HomePage;
