import React from "react";
import {
	Paper,
	Typography,
	makeStyles,
	Checkbox,
	Button,
	Container,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
	paper: {
		width: "250px",
		height: "120px",
		backgroundColor: "#ebebed",
		padding: "10px",
		[theme.breakpoints.down("xs")]: {
			width: "90vw",
			margin: "auto",
		},
	},
	button: {
		backgroundColor: "#ff9900",
		marginTop: "10px ",
	},
}));
const Subtotal = () => {
	const classes = useStyles();
	const { basket } = useSelector((state) => state.cart);
	return (
		<Paper elevation={1} className={classes.paper}>
			<Typography variant="h6">
				SubTotal ({basket.length} Items): $
				{basket.reduce((amount, item) => item.price + amount, 0)}
			</Typography>
			<Typography>
				<Checkbox color="textSecondary" /> This orders contain a gift{" "}
			</Typography>
			<Link to="/payment">
				<Button variant="contained" className={classes.button}>
					Proceed to Checkout{" "}
				</Button>
			</Link>
		</Paper>
	);
};

export default Subtotal;
