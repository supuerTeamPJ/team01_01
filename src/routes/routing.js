import {createBrowserRouter} from 'react-router-dom'
import MainPage from '../pages/main'
import ProductList from '../pages/product'
import Customer from '../pages/qa'
import Layout from '../components/layout'


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
      }
    ]
  }
])


export default router