import React from "react";
import {
	Grid,
	Paper,
	makeStyles,
	Typography,
	Button,
	Container,
} from "@material-ui/core";
import { products } from "../utils";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/actions/action";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
	Container: {
		backgroundColor: "#ddd",
	},
	item: {
		textAlign: "center",
	},
	img: {
		maxWidth: "100px",
	},
	paper: {
		maxHeight: "400px",
		minHeight: "400px",
		padding: "20px",
		maxWidth: "90%",
		margin: " 50px auto",
		[theme.breakpoints.down("md")]: {
			width: "200px",
		},
		position: "relative",
	},
	Button: {
		backgroundColor: "#ff9900",
		color: "#000",
		fontWeight: 600,
		margin: "20px auto",
		position: "absolute",
		bottom: "10px",
		left: "40%",
		[theme.breakpoints.down("md")]: {
			left: "20%",
		},
	},
	rating: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		margin: "20px auto",
	},
	paper1: {
		minHeight: "290px",
		maxHeight: "auto",
		padding: 20,
		marginBottom: 50,
		position: "relative",
	},
	img1: {
		width: "150px",
	},
	rating1: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		margin: "5px auto",
	},
	Button1: {
		backgroundColor: "#ff9900",
		color: "#000",
		fontWeight: 600,
		margin: "5px auto",
		position: "absolute",
		bottom: "10px",
		left: "30%",
		[theme.breakpoints.down("md")]: {
			left: "40px",
		},
	},
	img2: {
		width: "250px",
		[theme.breakpoints.down("md")]: {
			width: "100px",
		},
	},
}));
const Product = () => {
	const items = products;
	const classes = useStyles();
	const dispatch = useDispatch();
	const handleClick = (item) => {
		dispatch(addToBasket(item));
	};
	return (
		<>
			<Grid
				container
				spacing={1}
				justifyContent="center"
				className={classes.Container}
			>
				{items &&
					items.slice(0, 2).map((item) => (
						<Grid
							item
							xs={9}
							md={6}
							lg={6}
							xl={6}
							className={classes.item}
							key={item.id}
						>
							<Paper className={classes.paper} elevation={2}>
								<Link to={`/productDetail/${item.id}`}>
									<Typography className={classes.title}>
										{item.title}
									</Typography>
								</Link>
								<Typography className={classes.price}>
									{" "}
									$ {item.price}
								</Typography>
								<div className={classes.rating}>
									{Array(item.rating)
										.fill()
										.map((_, index) => (
											<p key={index}>⭐</p>
										))}
								</div>
								<div className="img-container">
									<img src={item.image} alt="product" className={classes.img} />
								</div>
								<Button
									endIcon={<ShoppingCartOutlined />}
									className={classes.Button}
									variant="contained"
									onClick={() => handleClick(item)}
								>
									{" "}
									add to cart{" "}
								</Button>
							</Paper>
						</Grid>
					))}
				{items &&
					items.slice(2, 5).map((item) => (
						<Grid
							item
							xs={9}
							md={5}
							lg={4}
							xl={2}
							className={classes.item}
							key={item.id}
						>
							<Container>
								<Paper className={classes.paper1} elevation={2}>
									<Link to={`/productDetail/${item.id}`}>
										<Typography className={classes.title}>
											{item.title}
										</Typography>
									</Link>
									<Typography className={classes.price}>
										{" "}
										$ {item.price}
									</Typography>
									<div className={classes.rating1}>
										{Array(item.rating)
											.fill()
											.map((_, index) => (
												<p key={index}>⭐</p>
											))}
									</div>
									<div className="img-container">
										<img
											src={item.image}
											alt="product"
											className={classes.img1}
										/>
									</div>
									<Button
										endIcon={<ShoppingCartOutlined />}
										className={classes.Button1}
										variant="contained"
										onClick={() => handleClick(item)}
									>
										{" "}
										add to cart{" "}
									</Button>
								</Paper>
							</Container>
						</Grid>
					))}
				{items &&
					items.slice(5, 6).map((item) => (
						<Grid
							item
							xs={10}
							md={8}
							lg={8}
							xl={8}
							className={classes.item}
							key={item.id}
						>
							<Container>
								<Paper className={classes.paper} elevation={2}>
									<Link to={`/productDetail/${item.id}`}>
										<Typography className={classes.title}>
											{item.title}
										</Typography>
									</Link>
									<Typography className={classes.price}>
										{" "}
										$ {item.price}
									</Typography>
									<div className={classes.rating}>
										{Array(item.rating)
											.fill()
											.map((_, index) => (
												<p key={index}>⭐</p>
											))}
									</div>
									<div className="img-container">
										<img
											src={item.image}
											alt="product"
											className={classes.img2}
										/>
									</div>
									<Button
										endIcon={<ShoppingCartOutlined />}
										className={classes.Button}
										variant="contained"
										onClick={() => handleClick(item)}
									>
										{" "}
										add to cart{" "}
									</Button>
								</Paper>
							</Container>
						</Grid>
					))}
			</Grid>
		</>
	);
};

export default Product;
