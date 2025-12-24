import {createBrowserRouter} from "react-router-dom";
import Layout from "./Components/Layout";
import App from "./App";
import About from "./Components/About";
import News from "./Components/News";

const apiKey = process.env.REACT_APP_API_KEY;


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
     children: [
      { index: true, element: <App /> },
      {path: "/about", element: <About /> },
      {path: "/general", element: <News key="general" category="general" pageSize="8" apiKey={apiKey}/>},
      {path: "/technology", element: <News key="technology" category="technology" pageSize="8" apiKey={apiKey} />},
      {path: "/sports", element: <News key="sports" category="sports" pageSize="8" apiKey={apiKey}/>},
      {path: "/business", element: <News key="business" category="business" pageSize="8" apiKey={apiKey}/>},
      {path: "/entertainment", element: <News key="entertainment" category="entertainment" pageSize="8" apiKey={apiKey}/>},
      {path: "/health", element: <News key="health" category="health" pageSize="8" apiKey={apiKey}/>},
      {path: "/science", element: <News key="science" category="science" pageSize="8" apiKey={apiKey}/>}
    ],
  },
]);

export default router;                 