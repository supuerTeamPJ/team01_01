
import React from "react"
import VisualSection from "./visualsection"
import NewArrivalsSection from "./newarrivalssection"
import ProductListSection from "./ProductListSection"
import Bbssection from "./bbssection"
//import VideoSection from "./videosection "


const MainPage = () =>{
  return(
    <>
    <VisualSection/>
    <NewArrivalsSection/>
    <ProductListSection/>
    {/* <VideoSection/> */}
    <Bbssection/>
    </>
  )
}

export default MainPage