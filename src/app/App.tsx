import { RouterProvider } from "react-router";
import { TanstackQueryProvider } from "./providers/tanStackQueryProvider";

import router from "@/app/providers/createBrowserRouter";


function App() {
  return (
    <TanstackQueryProvider>
      <RouterProvider router={router} />
    </TanstackQueryProvider>
  )
}
export default App;