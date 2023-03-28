import Header from "./components/public/Header"
import ProductsTable from "./components/public/ProductsTable"

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <ProductsTable />
      </div>
    </>
  )
}

export default App
