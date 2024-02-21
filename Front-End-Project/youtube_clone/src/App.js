import "./App.css";
import Head from "./components/Head";

import Body from "./components/Body";
import Store from "./Utils/Store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContiner from "./components/MainContiner";

const appRouter = createBrowserRouter([
  {
    path: "/",
    Element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContiner />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={Store}>
      <Head />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
