import ProductList from "./ProductList";
import {Outlet} from "@mui/icons-material";

const Home = () => {
    return <div>
        <ProductList />
        <Outlet />
    </div>
}

export default Home;
