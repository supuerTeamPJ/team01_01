import React from 'react';
import GlobalStyles from './styled/reset';
import {RouterProvider} from 'react-router-dom';
import router from './routes/routing';

function App() {
  return (
    <>
    <GlobalStyles/>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;