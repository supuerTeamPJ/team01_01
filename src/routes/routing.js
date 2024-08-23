import {createBrowserRouter} from 'react-router-dom'
import MainPage from '../pages/main'
import ProductList from '../pages/product'
import Customer from '../pages/qa'
import Layout from '../components/layout'
import Detailpage from '../pages/product/detailpage/detailpage'


const router = createBrowserRouter([
  {
    element: <Layout/>,
    children:[
      {
        path: '/',
        element: <MainPage/>
      },
      {
        path: '/product',
        element: <ProductList/>
      },
      {
        path: '/customer',
        element:<Customer/>
      },
      {
        path: '/product/:id',
        element: <Detailpage/>
      }
    ]
  }
])


export default router