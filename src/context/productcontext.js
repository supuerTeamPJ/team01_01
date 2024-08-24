import { useState } from "react";
import { createContext } from "react";
import PRODUCT from "../_Mock/poducst";



const ProductStore = createContext();


const ProductProvider = ({children}) => {

  const [product, setproduct] = useState(PRODUCT);

  return(
    <ProductStore.Provider value={{product, setproduct}}>
      {children}
    </ProductStore.Provider>
  )
}


export {ProductProvider, ProductStore};

