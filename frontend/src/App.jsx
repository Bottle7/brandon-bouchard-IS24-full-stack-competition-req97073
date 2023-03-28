import { RouterProvider } from "react-router-dom";
import Header from "./components/public/Header";
import router from "./router/router";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
