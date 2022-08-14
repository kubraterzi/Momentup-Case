import {Route, Routes} from "react-router-dom"
import Home from "../components/Home";
import ProductDetail from "../components/ProductDetail";
import ProductList from "../components/ProductList";


const Router = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<ProductList />} />
                    <Route path={"products/filter"} element={<ProductList />} />
                    <Route path="products/:id" element={<ProductDetail />} />
                </Route>
            </Routes>
    )
}

export default Router;