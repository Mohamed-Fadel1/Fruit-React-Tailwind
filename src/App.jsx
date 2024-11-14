import { createHashRouter, RouterProvider } from "react-router-dom";
import LayOut from "./Components/LayOut/LayOut";
import Cart from "./Components/Cart/Cart";
import Fruit from "./Components/Fruit/Fruit";

const App = () => {
  const routes = createHashRouter([
    {
      path: "/", 
      element: <LayOut />, 
      children: [
        { path: "cart", element: <Cart /> },
        { index: true, element: <Fruit /> },
        { path: "fruit", element: <Fruit /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={routes} />
  );
};

export default App;
