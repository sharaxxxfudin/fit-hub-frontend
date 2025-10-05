import { createBrowserRouter } from "react-router";
import RootPage from "@/pages/RootPage";
import OfferPage from "@/pages/OfferPage";
import MainLayout from "@/app/layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <>not found</>,
    children: [

      { index: true, element: <RootPage /> },
      { path: 'offers', element: <OfferPage /> }

    ]

  },
]);

export default router;
