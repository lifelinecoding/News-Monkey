import {createBrowserRouter} from "react-router-dom";
import Layout from "./Components/Layout";
import App from "./App";
// import News from "./Components/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
     children: [
      { index: true, element: <App /> },
    ],
  },
]);

export default router;