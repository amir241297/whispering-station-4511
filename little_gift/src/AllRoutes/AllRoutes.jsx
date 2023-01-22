import { Route, Routes } from "react-router-dom"
import { BoyFashion } from "../Pages/BoyFashion"
import { GirlFashion } from "../Pages/GirlFashion"
import { Product } from "../Pages/Product"

export const AllRoutes=()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Product />}></Route>
                <Route path="/boysfashion" element={<BoyFashion />}></Route>
                <Route path="/girlsfashion" element={<GirlFashion />}></Route>
                <Route path='/*' element={<h1>something went wrong!</h1>} />
            </Routes>
        </div>
    )
}