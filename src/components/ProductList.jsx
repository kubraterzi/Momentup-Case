import {AppBar, Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, Toolbar} from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import HomeIcon from '@mui/icons-material/Home';


import {useEffect, useState} from "react";
// import axios from "axios";
import {MainContext, useContext} from "../context/MainContext";
import ProductCard from "./ProductCard";


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

    const {products, filterOptions, sortOptions, filter, sort} = useContext(MainContext)


    const [filteredProductList, setFilteredProductList] = useState([])
    const [category, setCategory] = useState("");
    const [color, setColor] = useState("");
    const [sortType, setSortType] = useState("");

    useEffect(() => {
        document.body.style.backgroundColor="white"
    }, [])

    const handleChangeForCategory = (event) => {
        setCategory(event.target.value);
    };

    const handleChangeForColor = (event) => {
        setColor(event.target.value);
    };

    const handleChangeForSortType = (event) => {
        setSortType(event.target.value);
    };


    const filterProducts = () => {
        const filteredProducts = filter({categoryName: category, colorName: color})
        setFilteredProductList(filteredProducts)
    }


    const sortProducts = (sortTypeId) => {
        const sortedProducts = sort({sortTypeId: sortTypeId})
        setFilteredProductList(sortedProducts)
    }

    const navigateToHome = () => {
        setFilteredProductList(products)
    }


    useEffect(() => {
        setFilteredProductList(products)
    },[products])


    return (<>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static" sx={{backgroundColor: "#F4F4F4"}}>
                    <Toolbar>
                        <Grid container spacing={2}
                              sx={{marginTop: "1rem", width: "80%", marginRight: "auto", marginLeft: "auto"}}>
                            <Grid item xs={10}>
                                <FormControl sx={{m: 2, minWidth: 150}}>
                                    <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={category}
                                        label="Category"
                                        onChange={handleChangeForCategory}
                                    >

                                        {filterOptions[0]?.values.map((option, index) => (
                                            <MenuItem key={index} value={option}> {option}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FormControl sx={{m: 2, minWidth: 120}}>
                                    <InputLabel id="demo-simple-select-helper-label">Color</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={color}
                                        label="Color"
                                        onChange={handleChangeForColor}
                                    >

                                        {filterOptions[1]?.values.map((option, index) => (
                                            <MenuItem key={index} value={option}> {option} </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <IconButton aria-label="Filter" sx={{marginTop: "1rem"}} onClick={filterProducts}>
                                    <FilterAltIcon fontSize="large"/>
                                </IconButton>
                            </Grid>

                            <Grid item xs={2}>
                                <FormControl sx={{m: 2, minWidth: 120}}>
                                    <InputLabel id="demo-simple-select-helper-label">Sort</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={sortType}
                                        label="Sort"
                                        onChange={handleChangeForSortType}
                                    >
                                        {
                                            sortOptions.map(type => (
                                                <MenuItem key={type.id} value={type.name}
                                                          onClick={() => sortProducts(type.id)}> {type.name} </MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>

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

                    {filteredProductList.length > 0 &&
                        <div style={{textAlign: "center", marginTop: "2rem"}}>
                            {filteredProductList.length > 1 ? `${filteredProductList.length} products found` : `${filteredProductList.length} product found`}
                        </div>}
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