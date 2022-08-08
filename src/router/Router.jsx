import { Route, Routes} from "react-router-dom"
import Home from "../components/Home";
import ProductDetail from "../components/ProductDetail";


const Router = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="category/:category" element={<Home />} />
                <Route path="color/:color" element={<Home />} />
                <Route path="products/:id" element={<ProductDetail />}/>
            </Routes>
    )
}

export default Router;