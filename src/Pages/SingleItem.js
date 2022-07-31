import React from "react";
import { useParams } from "react-router-dom";
import { makeStyles, Grid, Typography, Button } from "@material-ui/core";
import { products } from "../utils";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/actions/action";
const useStyles = makeStyles((theme) => ({
	image: {
		width: "100%",
		objectFit: "cover",
		objectPositon: "left center",
	},
	container: {
		marginTop: theme.spacing(9),
	},
	productImage: {
		display: "block",
		width: "100%",
		margin: "auto",
		[theme.breakpoints.down("md")]: {
			maxWidth: "300px",
			margin: "auto",
		},
	},
	grid: {
		marginTop: theme.spacing(2),
	},
	rating: {
		display: "flex",
		marginBottom: theme.spacing(1),
	},
	description: {
		margin: "10px 0",
	},
	Button: {
		backgroundColor: "#ff9900",
	},
	content: {
		[theme.breakpoints.down("sm")]: {
			margin: "10px",
		},
	},
}));
const SingleItem = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { id } = useParams();
	const singleProduct = products.find((item) => item.id === id);
	const handleClick = () => {
		dispatch(addToBasket(singleProduct));
	};
	return (
		<div className={classes.container}>
			<img
				src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
				alt="sales"
				className={classes.image}
			/>
			<Grid container spacing={4} className={classes.grid}>
				<Grid item xs={12} md={4}>
					<img
						src={singleProduct.image}
						alt="product"
						className={classes.productImage}
					/>
				</Grid>
				<Grid item xs={12} md={8} className={classes.content}>
					<Typography variant="h5">{singleProduct.title}</Typography>
					<Typography>
						<div className={classes.rating}>
							{Array(singleProduct.rating)
								.fill()
								.map((_, index) => (
									<p key={index}>⭐</p>
								))}
						</div>
					</Typography>
					<Typography variant="h5">
						{" "}
						Price: $ <strong>{singleProduct.price}</strong>
					</Typography>
					<div className={classes.specification}>
						<Typography variant="h6">specification</Typography>
						{singleProduct.specification &&
							singleProduct.specification.map((speci, index) => (
								<li key={index}>{speci}</li>
							))}
					</div>
					<div className={classes.description}>
						<Typography variant="h6">Product Descripton</Typography>
						<Typography>{singleProduct.detail}</Typography>
					</div>
					<Button
						endIcon={<ShoppingCartOutlined />}
						className={classes.Button}
						variant="contained"
						onClick={handleClick}
					>
						{" "}
						add to cart{" "}
					</Button>
				</Grid>
			</Grid>
		</div>
	);
};

export default SingleItem;
