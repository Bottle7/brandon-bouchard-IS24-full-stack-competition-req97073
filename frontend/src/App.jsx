import {
  Routes,
  Route
} from 'react-router-dom'
import AddForm from './components/public/AddForm';
import EditForm from './components/public/EditForm';
import Footer from './components/public/Footer';
import Header from './components/public/Header';
import ProductsTable from './components/public/ProductsTable'
import Search from './components/public/Search';

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Routes>
          <Route path='/' element={<ProductsTable />} />
          <Route path='/add' element={<AddForm />} />
          <Route path='/edit' element={<EditForm />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
