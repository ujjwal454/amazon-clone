import React from "react";
import moment from "moment";
import {
	makeStyles,
	Typography,
	Grid,
	Button,
	Container,
} from "@material-ui/core";
import CurrencyFormat from "react-currency-format";
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
const Order = ({ order }) => {
	const classes = useStyles();
	console.log(order);
	return (
		<div className={classes.conatiner}>
			<Typography>
				{moment.unix(order.data.createdAt).format("MMMM DD YYYY, h:mma")}
			</Typography>
			<div className={classes.order}>
				{order &&
					order.data.basket.map((item, index) => (
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
							</Grid>
						</Grid>
					))}
			</div>
		</div>
	);
};

export default Order;
