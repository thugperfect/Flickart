import "./App.css";
import { lazy,Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import HomeBody from "./components/HomeBody";
import { DataProvider } from "./utils/DataContext";


function App() {

  const ProductBody = lazy(()=>import("./components/ProductBody"))
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
          element: <Suspense fallback={<h1>Loading...</h1>}><ProductBody/></Suspense>,
        },
        {
          path: "cart",
          element: <h1>cart</h1>,
        },
      ]
    },
   
  ]);
  return (<DataProvider><RouterProvider router={appRouter}/></DataProvider>);
}

export default App;
