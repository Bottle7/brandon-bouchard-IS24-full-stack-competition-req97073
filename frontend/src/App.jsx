import { RouterProvider } from "react-router-dom";
import Footer from "./components/public/Footer";
import Header from "./components/public/Header";
import router from "./router/router";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  )
}

export default App
