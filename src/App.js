import React from 'react';
import GlobalStyles from './styled/reset';
import {RouterProvider} from 'react-router-dom';
import router from './routes/routing';
import { ProductProvider } from './context/productcontext';

function App() {
  return (
    <>
    <ProductProvider>
      <GlobalStyles/>
      <RouterProvider router={router}/>
    </ProductProvider>
    </>
  );
}

export default App;