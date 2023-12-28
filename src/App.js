import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import HomeBody from "./components/HomeBody";
import ProductBody from "./components/ProductBody";

function App() {


  const appRouter = createBrowserRouter([

    {
      path: "/",
      element: <Home/>,
      children:[
        {
          path:"",
          element:<HomeBody/>
        },
        {
          path: "home",
          element: <HomeBody/>,
        },
        {
          path: "product/:id",
          element: <ProductBody/>,
        },
        {
          path: "cart",
          element: <h1>cart</h1>,
        },
      ]
    },
   
  ]);
  return (<RouterProvider router={appRouter}/>);
}

export default App;
