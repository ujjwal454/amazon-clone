import React from "react";
import { makeStyles, Typography, Grid, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingCartOutlined } from "@material-ui/icons";
import Subtotal from "../components/Subtotal";
import { removeFromBasket } from "../redux/actions/action";
const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: theme.spacing(9),
		minHeight: "100vh",
		position: "relative",
		[theme.breakpoints.down("xs")]: {
			marginTop: theme.spacing(27),
		},
	},
	imgContainer: {
		width: "70%",
		[theme.breakpoints.down("xs")]: {
			display: "none",
		},
	},
	headerImage: {
		height: "auto",
		width: "100%",
		objectFit: "cover",
		objectPosition: "left center",
		marginTop: "auto",
		marginBottom: "auto",
	},
	boldText: {
		fontWeight: "600",
	},
	rating: {
		display: "flex",
		marginBottom: theme.spacing(2),
	},
	itemImage: {
		width: "100px",
		display: "block",
	},
	button: {
		backgroundColor: "#ff9900",
	},
	gridContainer: {
		margin: "20px 0",
	},
	spacing: {
		marginBottom: "10px",
	},
	subtotal: {
		position: "fixed",
		top: 75,
		right: 10,
		[theme.breakpoints.down("sm")]: {
			right: 0,
		},
	},
}));
const ChexkOut = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { basket } = useSelector((state) => state.cart);
	const { user } = useSelector((state) => state.auth);
	const handleClick = (id) => {
		dispatch(removeFromBasket(id));
	};
	console.log(basket);
	return (
		<>
			<div container className={classes.container}>
				<div className={classes.imgContainer}>
					<img
						src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
						alt=""
						className={classes.headerImage}
					/>
					<div className={classes.cart}>
						<Typography variant="h5">
							Hello, {user ? user.email : "Guest"}{" "}
						</Typography>
						<Typography variant="h6" className={classes.boldText}>
							{basket
								? `There are ${basket.length} items in your cart`
								: "Item Added to your Cart Will Appear here currently there is 0 items in your cart"}
						</Typography>
						<hr />
					</div>
				</div>
				{basket &&
					basket.map((item, index) => (
						<Grid
							container
							spacing={2}
							key={index}
							className={classes.gridContainer}
						>
							<Grid item lg={2}>
								<img
									src={item.image}
									alt="item"
									className={classes.itemImage}
								/>
							</Grid>
							<Grid item lg={4}>
								<Typography variant="h5" className={classes.spacing}>
									{item.title}
								</Typography>
								<Typography variant="h6" className={classes.spacing}>
									Price: ${item.price}
								</Typography>
								<div className={classes.rating}>
									{Array(item.rating)
										.fill()
										.map((_, index) => (
											<p key={index}>⭐</p>
										))}
								</div>
								<Button
									variant="contained"
									endIcon={<ShoppingCartOutlined />}
									className={classes.button}
									onClick={() => handleClick(item.id)}
								>
									{" "}
									Reamove from Basket{" "}
								</Button>
							</Grid>
						</Grid>
					))}
				<div className={classes.subtotal}>
					<Subtotal />
				</div>
			</div>
		</>
	);
};

export default ChexkOut;
