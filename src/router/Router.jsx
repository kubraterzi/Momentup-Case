import { Route, Routes} from "react-router-dom"
import Home from "../components/Home";
import ProductDetail from "../components/ProductDetail";


const Router = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="products" element={<Home />} >
                    <Route path=":id" element={<ProductDetail />}/>
                </Route>
            </Routes>
    )
}

export default Router;