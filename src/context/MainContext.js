import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

const MainContext = createContext()


const MainContextProvider = ({children}) => {

    const [products, setProducts] = useState([])
    // const [currentProduct, setCurrentProduct] = useState([])
    const [filterOptions, setFilterOptions] = useState([])
    const [sortOptions, setSortOptions] = useState([])


    const fetchProducts = () => {
        axios.get("http://localhost:3004/products")
            .then(response => {
                setProducts(response.data)
            })
    }

    const fetchFilterOptions = () => {
        axios.get("http://localhost:3004/filter_options")
            .then(response => {
                setFilterOptions(response.data)
            })

    }

    const fetchSortOptions = () => {
        axios.get("http://localhost:3004/sort_options")
            .then(response => {
                setSortOptions(response.data)
            })
    }

    const getProductById = (id) => {
        return axios.get(`http://localhost:3004/products/${id}`)
            .then(response => {
               return response.data;
            })
    }


    useEffect(() => {
        fetchProducts()
        fetchFilterOptions()
        fetchSortOptions()
    }, [])


    const filter = ({categoryName, colorName}) => {
        return products.filter(product => {
            if (categoryName && colorName) {
                return product.category === categoryName && product.color === colorName
            }

            if (categoryName) {
                return product.category === categoryName
            }

            if (colorName) {
                return product.color === colorName
            }

            return true;
        })
    }


    const sort = ({sortTypeId}) => {
        switch (sortTypeId) {
            case "price":
                return products.sort((a, b) => (a.price - b.price))
                break;
            case "priced":
                return products.sort((a, b) => (b.price - a.price))
                break;
            case "title":
                return products.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
                break;
            case "titled":
                return products.sort((a, b) => ((b.name > a.name) ? 1 : (a.name > b.name) ? -1 : 0))
                break;

            default:
                return true;
        }
    }



    const data = {filterOptions, sortOptions, getProductById, filter, sort, products}

    return <MainContext.Provider value={data}>{children}</MainContext.Provider>
}

export {MainContext, MainContextProvider, useContext}