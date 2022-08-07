import {createContext, useContext} from "react";

const MainContext = createContext()

const products = [{
    "id": 19408,
    "price": 39.9,
    "name": "Long Sleeve Sweater",
    "category": "Sweater",
    "currency": "USD",
    "image_name": "long-sleeve-sweater",
    "color": "White"
}, {
    "id": 17936,
    "price": 99.9,
    "name": "Long Coat",
    "category": "Coat",
    "currency": "USD",
    "image_name": "long-coat",
    "color": "Black"
}, {
    "id": 14536,
    "price": 17.9,
    "name": "Rain Coat",
    "category": "Coat",
    "currency": "USD",
    "image_name": "rain-coat",
    "color": "White"
}, {
    "id": 18218,
    "price": 49.9,
    "name": "Printed Midi Dress",
    "category": "Dress",
    "currency": "USD",
    "image_name": "printed-midi-dress",
    "color": "Blue"
}, {
    "id": 12816,
    "price": 89.9,
    "name": "Blazer Coat",
    "category": "Coat",
    "currency": "USD",
    "image_name": "blazer-coat",
    "color": "Black"
}, {
    "id": 11189,
    "price": 29.9,
    "name": "Scoop Neck Mini Dress",
    "category": "Dress",
    "currency": "USD",
    "image_name": "scoop-neck-midi-dress",
    "color": "Black"
}, {
    "id": 17238,
    "price": 129.9,
    "name": "Short Sleeve Sweater",
    "category": "Sweater",
    "currency": "USD",
    "image_name": "short-sleeve-sweater",
    "color": "White"
}, {
    "id": 16108,
    "price": 39.0,
    "name": "Party Dress",
    "category": "Dress",
    "currency": "USD",
    "image_name": "party-dress",
    "color": "Blue"
}, {
    "id": 12408,
    "price": 39.95,
    "name": "Winter Coat",
    "category": "Coat",
    "currency": "USD",
    "image_name": "winter-coat",
    "color": "White"
}, {
    "id": 12348,
    "price": 119.55,
    "name": "Casual Dress",
    "category": "Dress",
    "currency": "USD",
    "image_name": "casual-dress",
    "color": "Black"
}]

const filterOptions = [{
    "name": "Category", "values": ["Sweater", "Coat", "Dress"]
}, {
    "name": "Color", "values": ["Black", "White", "Blue"]
}]

const sortOptions = [{
    "id": "title", "name": "Order A-Z"
}, {
    "id": "titled", "name": "Order Z-A"
}, {
    "id": "price", "name": "Lowest price"
}, {
    "id": "priced", "name": "Highest price"
}]


const getProductById = (id) => {
    return products.find(product => product.id == id)
}


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
            return null;
    }
}

const data = {products, filterOptions, sortOptions, getProductById, filter, sort}

const MainContextProvider = ({children}) => {
    return <MainContext.Provider value={data}>{children}</MainContext.Provider>
}

export {MainContext, MainContextProvider, useContext}