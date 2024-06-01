import App from "@/App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
])

const RouteProvider = () => <RouterProvider router={router} />

export default RouteProvider