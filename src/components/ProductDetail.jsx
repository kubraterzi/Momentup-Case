import {
    Box,
    Card,
    CardMedia, Grid, Paper,
    Table, TableBody, TableCell,
    TableContainer, TableRow,
    Typography
} from "@mui/material";

import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {MainContext, useContext} from "../context/MainContext";



const ProductDetail = () => {
    const {id} = useParams()
    const {getProductById} = useContext(MainContext)

    const[currentProduct, setCurrentProduct] = useState({})


    useEffect(() => {
        const product = getProductById(id)
        setCurrentProduct(product)

    }, [id])


    console.log(currentProduct)


    return (
        <Grid container spacing={2} sx={{marginTop: "1rem", width:"70%", marginRight:"auto", marginLeft:"auto"}}>
            <Grid item xs={6} >
                <Box
                    sx={{
                        p: 2,
                        bgcolor: 'background.default',
                        display: 'grid',
                        gridTemplateColumns: { md: '1fr' },
                        gap: 2,
                    }}
                >
                    <Card>
                        <CardMedia  component="img"
                                    height="520"
                                    width="655"
                                    image={`images/${currentProduct?.image_name}.png`}
                                    alt={currentProduct?.image_name} />
                    </Card>
                </Box>
            </Grid>

            <Grid item xs={4} >
                <Box
                    sx={{
                        p: 2,
                        bgcolor: 'background.default',
                        display: 'grid',
                        gridTemplateColumns: { md: '1fr' },
                        gap: 2,
                    }}
                >
                    <TableContainer component={Paper} sx={{ marginTop:"6rem"}}>
                        <Typography  variant="h5" component="h4" sx={{ p:2}}>
                            {currentProduct?.name}
                        </Typography>
                        <Table sx={{ width:"100%" }} aria-label="custom table">
                            <TableBody>
                                <TableRow key="{a}">
                                    <TableCell component="th" scope="row">
                                        Category
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="right">
                                        {currentProduct?.category}
                                    </TableCell>
                                </TableRow>
                                <TableRow key="{b}">
                                    <TableCell component="th" scope="row">
                                        Color
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="right">
                                        {currentProduct?.color}
                                    </TableCell>
                                </TableRow>
                                <TableRow key="{v}">
                                    <TableCell component="th" scope="row">
                                        Price
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="right">
                                        {currentProduct?.currency} {currentProduct?.price}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Grid>
        </Grid>
    )
}

export default ProductDetail;