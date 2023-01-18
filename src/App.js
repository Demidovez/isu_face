import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Application from "./pages/Application/Application";
import Home from "./pages/Home/Home";
import Settings from "./pages/Settings/Settings";

const router = createBrowserRouter(
  [
    {
      element: (
        <>
          <Header />
          <Outlet />
        </>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: "/app/*",
          element: <Application />,
          loader: ({ params }) => params,
        },
      ],
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} ba />
    </div>
  );
}

export default App;
