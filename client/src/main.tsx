import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider} from '@chakra-ui/react'
import theme from "../theme"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './routes/HomePage'
import RestaurantPage from './routes/RestaurantPage'

const router = createBrowserRouter([{
  path: "/",
  element: <HomePage/>
},
{
  path: "restaurant/:restauranId",
  element: <RestaurantPage/>
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
 <ChakraProvider resetCSS theme={theme}>
   <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
 </ChakraProvider>,
)
