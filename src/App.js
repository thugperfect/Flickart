import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import HomeBody from "./components/HomeBody";

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
          element: <h1>product</h1>,
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
