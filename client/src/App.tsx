import { useState } from "react";
import Layout from "./components/layout/Layout";
import useRestaurants from "./hooks/useRestaurants";

function App() {
  const {data, loading, error} = useRestaurants()
  const [,setSearchData] = useState<string>("");
  console.log(data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Layout onSubmit={setSearchData}>
      {data.map((item) => <div key={item.id}>{item.userName}</div>)}
    </Layout>
  );
}

export default App;
