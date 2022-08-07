import {
    Button,
    Card, CardActions,
    CardContent,
    CardMedia,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow, Typography
} from "@mui/material";
import {useNavigate} from "react-router-dom";


const buttonStyle = {
    fontSize: "0.65rem",
    color: "#fff",
    backgroundColor: "#363636",
    ":hover": { color: "#222222", backgroundColor: "#ccc" },
};

const ProductCard = (props) => {

    const navigate = useNavigate()

    const handleNavigateToDetail = ()=> {
        navigate(`products/${props.product?.id}`)
    }

    return(
        <Card sx={{ width: 300, marginLeft: "2rem", marginBottom: "2rem" }}>
            <CardMedia  component="img"
                        height="520"
                        width="655"
                        image={`images/${props.product?.image_name}.png`}
                        alt={props.product?.image_name}>
            </CardMedia>
            <CardContent>
                <Typography
                    gutterBottom
                    component="div"
                    sx={{ fontSize: "1.25rem", textAlign: "center" }}
                >
                    {props.product?.name}
                </Typography>

                <TableContainer component={Paper} sx={{ marginTop: "1rem" }}>
                    <Table sx={{ width: "100%" }}>
                        <TableBody>
                            <TableRow sx={{ padding: 0 }}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    sx={{ fontSize: "0.75rem" }}
                                >
                                    Category
                                </TableCell>
                                <TableCell align="right" sx={{ fontSize: "0.85rem" }}>
                                    {props.product?.category}
                                </TableCell>
                            </TableRow>
                            <TableRow sx={{}}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    sx={{ fontSize: "0.75rem" }}
                                >
                                    Price
                                </TableCell>
                                <TableCell align="right" sx={{ fontSize: "0.85rem" }}>
                                    {props.product?.price} {props.product?.currency}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
            <CardActions sx={{ float: "right" }}>
                <Button sx={buttonStyle} onClick={handleNavigateToDetail}>
                    Details
                </Button>
            </CardActions>
        </Card>
    )
}


export default ProductCard