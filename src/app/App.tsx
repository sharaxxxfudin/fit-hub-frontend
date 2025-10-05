import { RouterProvider } from "react-router";

import router from "@/app/providers/createBrowserRouter";



function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
export default App;