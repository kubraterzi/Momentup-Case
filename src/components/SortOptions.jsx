import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useState} from "react";
import {MainContext, useContext} from "../context/MainContext";

const SortOptions = ({setFilteredProductList, filteredProductList}) => {

    const { sortOptions, sort} = useContext(MainContext)

    const [sortType, setSortType] = useState("");

    const handleChangeForSortType = (event) => {
        setSortType(event.target.value);
    };


    const sortProducts = (sortTypeId) => {
        const sortedProducts = sort({filteredList: filteredProductList, sortTypeId: sortTypeId})
        setFilteredProductList(sortedProducts.slice(0, filteredProductList.length))
    }



    return (
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
    )
}


export default SortOptions