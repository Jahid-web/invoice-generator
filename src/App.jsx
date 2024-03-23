import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/login";
import ErrorPage from "./pages/errorPage";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import Root from "./route/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
