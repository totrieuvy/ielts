import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import InformationClass from "./component/infor-class";
import ResultClass from "./component/result-class";
import Dung from "./component/dung";
import NhatVi from "./component/vi";
import NgocHa from "./component/ha";
import QueXuan from "./component/xuan";
import Toeic from "./component/toeic";
import Ielts from "./component/ielts";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <InformationClass />,
        },
        {
          path: "/result",
          element: <ResultClass />,
        },
        {
          path: "/viet-dung",
          element: <Dung />,
        },
        {
          path: "/nhat-vi",
          element: <NhatVi />,
        },
        {
          path: "/ngoc-ha",
          element: <NgocHa />,
        },
        {
          path: "/que-xuan",
          element: <QueXuan />,
        },
        {
          path: "/toeic",
          element: <Toeic />,
        },
        {
          path: "/ielts",
          element: <Ielts />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
