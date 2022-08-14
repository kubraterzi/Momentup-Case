import {AppBar, Box, Button, Grid, Toolbar} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';


import {useEffect, useState} from "react";
import {MainContext, useContext} from "../context/MainContext";
import ProductCard from "./ProductCard";
import FilterOptions from "./FilterOptions";
import SortOptions from "./SortOptions";


const buttonStyle = {
    fontSize: "1.25rem",
    color: "#fff",
    padding: "0.6rem 1rem",
    marginTop: "1.1rem",
    marginLeft: "1rem",
    backgroundColor: "#363636",
    ":hover": {color: "#222222", backgroundColor: "#ccc"},
    size: "large"
};


const ProductList = () => {

    const {products } = useContext(MainContext)

    const [filteredProductList, setFilteredProductList] = useState([])


    useEffect(() => {
        document.body.style.backgroundColor="white"
    }, [])


    const navigateToHome = () => {
        setFilteredProductList(products)
    }


    useEffect(() => {
        if (!filteredProductList.length > 0) {
            setFilteredProductList(products)
        }
    },[products])



    return (<>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static" sx={{backgroundColor: "#F4F4F4"}}>
                    <Toolbar>
                        <Grid container spacing={2}
                              sx={{marginTop: "1rem", width: "80%", marginRight: "auto", marginLeft: "auto"}}>
                            <Grid item xs={10}>
                                <FilterOptions setFilteredProductList={setFilteredProductList}/>
                            </Grid>
                            <Grid item xs={2}>
                                <SortOptions setFilteredProductList={setFilteredProductList}
                                             filteredProductList={filteredProductList}/>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>


            {filteredProductList.length > 0 ?
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        marginTop: "3rem",
                        width: "90%",
                        marginRight: "auto",
                        marginLeft: "auto"
                    }}>
                        {filteredProductList.map((product) => (
                            <ProductCard key={product.id} product={product}/>
                        ))}
                    </div>
                    <div style={{textAlign: "center", marginTop: "2rem"}}>
                        {filteredProductList.length > 1 ? `${filteredProductList.length} products found` : `${filteredProductList.length} product found`}
                    </div>
                </div>
                :
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "5rem"
                }}>
                    <div style={{fontSize: "2rem", alignItems: "center", marginBottom: "5rem"}}>
                        No products founds
                    </div>
                    <div style={{alignItems: "flex-end"}}>
                        <Button variant="outlined" startIcon={<HomeIcon/>} style={buttonStyle} onClick={navigateToHome}>
                            HOME
                        </Button>
                    </div>
                </div>
            }
        </>
    )
}

export default ProductList;