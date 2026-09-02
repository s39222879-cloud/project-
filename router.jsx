import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./MainLayout";
import Home from "./Home";
import StoryViewer from "./StoryViewer";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      
      {
        index: true,
        element: <Home />,
      },
      {
        path: "story/:id",
        element: <StoryViewer />,
      },
    ],
  },
  
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;

