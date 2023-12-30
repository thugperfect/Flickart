import "./App.css";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import HomeBody from "./components/HomeBody";
import { DataProvider } from "./utils/DataContext";
import { Provider } from "react-redux";
import store from "./utils/redux/store";
import CartBody from "./components/CartBody";

function App() {
  const ProductBody = lazy(() => import("./components/ProductBody"));
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "",
          element: <HomeBody />,
        },
        {
          path: "home",
          element: <HomeBody />,
        },
        {
          path: "cart",
          element: <CartBody />,
        },
        {
          path: "product/:id",
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <ProductBody />
            </Suspense>
          ),
        },
        {
          path: "cart",
          element: <h1>cart</h1>,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <DataProvider>
        <RouterProvider router={appRouter} />
      </DataProvider>
    </Provider>
  );
}

export default App;
