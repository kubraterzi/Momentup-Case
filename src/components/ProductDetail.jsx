import {
    Box,
    Card,
    CardMedia,
    Grid, IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography
} from "@mui/material";

import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {MainContext, useContext} from "../context/MainContext";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const ProductDetail = () => {
    const {id} = useParams()
    const {getProductById} = useContext(MainContext)

    const navigate = useNavigate()

    const [currentProduct, setCurrentProduct] = useState({})


    const handleNavigateToHome = () => {
        navigate("/")

    }

    useEffect(() => {
        const product = getProductById(id)
        setCurrentProduct(product)
    }, [id])


    useEffect(()=> {
        if(id) {
            document.body.style.backgroundColor= currentProduct?.color
        }
    }, [currentProduct?.color])


    return (
        <Grid container spacing={2} sx={{marginTop: "1rem", width: "70%", marginRight: "auto", marginLeft: "auto"}}>
            <Grid item xs={6}>
                <Box
                    sx={{
                        p: 2,
                        display: 'grid',
                        gridTemplateColumns: {md: '1fr'},
                        gap: 2,
                    }}
                >
                    <Card>
                        <CardMedia component="img"
                                   image={`/images/${currentProduct?.image_name}.png`}
                                   alt={currentProduct?.image_name}/>
                    </Card>
                </Box>
            </Grid>

            <Grid item xs={4}>
                <Box
                    sx={{
                        p: 2,
                        bgcolor: 'background.default',
                        display: 'grid',
                        gridTemplateColumns: {md: '1fr'},
                        gap: 2,
                        marginTop: "17rem"
                    }}
                >
                    <TableContainer component={Paper} sx={{}}>
                        <Typography variant="h5" component="h4" sx={{p: 2}}>
                            {currentProduct?.name}
                        </Typography>
                        <Table sx={{width: "100%"}} aria-label="custom table">
                            <TableBody>
                                <TableRow key="{a}">
                                    <TableCell component="th" scope="row">
                                        Category
                                    </TableCell>
                                    <TableCell style={{width: 160}} align="right">
                                        {currentProduct?.category}
                                    </TableCell>
                                </TableRow>
                                <TableRow key="{b}">
                                    <TableCell component="th" scope="row">
                                        Color
                                    </TableCell>
                                    <TableCell style={{width: 160}} align="right">
                                        {currentProduct?.color}
                                    </TableCell>
                                </TableRow>
                                <TableRow key="{v}">
                                    <TableCell component="th" scope="row">
                                        Price
                                    </TableCell>
                                    <TableCell style={{width: 160}} align="right">
                                        {currentProduct?.currency} {currentProduct?.price}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <IconButton aria-label="Filter" sx={{marginTop: "1rem"}} onClick={handleNavigateToHome}>
                                        <ArrowBackIosIcon fontSize="large" />
                                        <span style={{fontSize: "1.25rem"}}>HOME</span>
                                    </IconButton>
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