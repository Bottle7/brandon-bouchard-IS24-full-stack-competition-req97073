import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import ProductsTable from '../components/public/ProductsTable'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<ProductsTable />}>
      <Route path='add' element={<div>Add Form Page</div>} />
      <Route path='edit' element={<div>Edit Form Page</div>} />
    </Route>
  )
)

export default router;
