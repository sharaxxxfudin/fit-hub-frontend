import { createBrowserRouter } from "react-router";
import RootPage from "@/pages/RootPage";
import AppRoot from "@/app/layouts/AppRoot";
import OfferPage from "@/pages/OfferPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoot />,
    errorElement: <>not found</>,
    children: [

      { index: true, element: <RootPage /> },
      { path: 'offers', element: <OfferPage /> }

    ]

  },
]);

export default router;
