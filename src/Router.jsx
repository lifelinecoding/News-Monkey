import {createBrowserRouter} from "react-router-dom";
import Layout from "./Components/Layout";
import App from "./App";
import About from "./Components/About";
import News from "./Components/News";
// import News from "./Components/News";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
     children: [
      { index: true, element: <App /> },
      { path: "/about", element: <About /> },
      {path: "/general", element: <News key="general" category="general" pageSize="8" />},
      {path: "/technology", element: <News key="technology" category="technology" pageSize="8" />},
      {path: "/sports", element: <News key="sports" category="sports" pageSize="8" />},
      {path: "/business", element: <News key="business" category="business" pageSize="8" />},
      {path: "/entertainment", element: <News key="entertainment" category="entertainment" pageSize="8" />},
      {path: "/health", element: <News key="health" category="health" pageSize="8" />},
      {path: "/science", element: <News key="science" category="science" pageSize="8" />}
    ],
  },
]);

export default router;                 