import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout/index'
import { History } from './pages/History/'
import { Home } from './pages/Home/'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>

      {/* Ex. Mais um layout para administrador, por exemplo 
       <Route path="/admin" element={<AdminLayout />}>
        <Route path="products" element={<ProductsAdmin />} />
      </Route>
      http://localhost:3333/admin/products */}
    </Routes>
  )
}
