import React, { useState } from "react";
import {
	makeStyles,
	Typography,
	Grid,
	Button,
	Container,
	RadioGroup,
	FormControlLabel,
	Radio,
} from "@material-ui/core";
import uuid from "react-uuid";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { removeFromBasket, setBasketEmpty } from "../redux/actions/action";
import { db } from "../Firebase/firebaseConfig";
import CurrencyFormat from "react-currency-format";
const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: theme.spacing(10),
	},
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
	button1: {
		backgroundColor: "#ff9900",
		marginLeft: "20px",
	},
	gridContainer: {
		margin: "20px 0",
	},
	spacing: {
		marginBottom: "10px",
	},
	check: {
		padding: "10px",
		backgroundColor: "#ddd",
		textAlign: "center",
		margin: "90px 0 10px 0",
	},
	PaymentSection: {
		marginBottom: "20px",
	},
	paymentDetail: {},
	CardElement: {
		height: "100%",
		color: "inherit",
		width: "40%",
		margin: "20px 0 ",
	},
}));
const Payment = () => {
	const classes = useStyles();
	const history = useHistory();
	const { basket } = useSelector((state) => state.cart);
	const { user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const [paymentMode, setpaymentMode] = useState("");
	const handleClick = (id) => {
		dispatch(removeFromBasket(id));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!user) {
			alert("Login Or SignUp first after u Can buy");
		} else if (paymentMode === "") {
			alert("please specify a payment method");
		} else if (
			basket &&
			basket.reduce((amount, item) => item.price + amount, 0) === 0
		) {
			alert("there is no items in your cart to Buy ");
		} else {
			db.collection("users")
				.doc(user && user.uid)
				.collection("orders")
				.doc(uuid())
				.set({
					basket: basket,
					createdAt: new Date(),
					paymentMode: paymentMode,
				});
			dispatch(setBasketEmpty());
			history.push("/orders");
		}
	};
	return (
		<Container className={classes.container}>
			<div className={classes.paymentContainer}>
				<Typography variant="h5" className={classes.check}>
					Checkout {<Link to="/checkout">{basket.length} items</Link>}
				</Typography>
				<div className={classes.PaymentSection}>
					<div className={classes.paymentTitle}>
						<Typography variant="h6">Deleviry Addres</Typography>
						<div className={classes.paymentAddress}>
							<Typography>{user && user.email}</Typography>
							<Typography>House no 00 . 230 Near historical place</Typography>
							<Typography>India</Typography>
						</div>
						<hr />
					</div>
				</div>
				<div className={classes.PaymentSection}>
					<Typography variant="h6">Review Address and Products</Typography>
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
				</div>
				<hr />
			</div>
			<div className={classes.payment}>
				<Typography variant="h5">Payment Method</Typography>
				<div>
					<form onSubmit={handleSubmit} className={classes.paymentDetail}>
						<RadioGroup
							value={paymentMode}
							onChange={(e) => setpaymentMode(e.target.value)}
						>
							<FormControlLabel
								value="Cash"
								label="Cash On Delivery"
								control={<Radio />}
							></FormControlLabel>
						</RadioGroup>
						<div>
							<CurrencyFormat
								renderText={(value) => (
									<>
										<Typography variant="h6">Order Total: {value}</Typography>
									</>
								)}
								decimalScale={2}
								value={
									basket &&
									basket.reduce((amount, item) => item.price + amount, 0)
								}
								displayType={"text"}
								thousandSeparator={true}
								prefix={"$"}
							/>
							<Button
								variant="contained"
								className={classes.button1}
								type="submit"
							>
								Buy Now
							</Button>
						</div>
					</form>
				</div>
			</div>
		</Container>
	);
};

export default Payment;
