import {FormControl, IconButton, InputLabel, MenuItem, Select} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {useState} from "react";
import {MainContext, useContext} from "../context/MainContext";




const FilterOptions = ({setFilteredProductList}) => {
    const [category, setCategory] = useState("");
    const [color, setColor] = useState("");

    const { filterOptions, filter} = useContext(MainContext)



    const handleChangeForCategory = (event) => {
        setCategory(event.target.value);
    };

    const handleChangeForColor = (event) => {
        setColor(event.target.value);
    };

    const filterProducts = () => {
        const filteredProducts = filter({categoryName: category, colorName: color})
        setFilteredProductList(filteredProducts)
    }



    return (<>
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

        </>
    )
}


export default FilterOptions;