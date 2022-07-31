import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { makeStyles, Grid, Button, Container } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../Firebase/firebaseConfig";
import Order from "./Order";
const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: theme.spacing(10),
		minHeight: "100vh",
		position: "relative",
		backgroundColor: "#fff",
		width: "70%",
		height: "70vh",
		margin: " 10px auto",
		[theme.breakpoints.down("xs")]: {
			marginTop: theme.spacing(27),
		},
	},
}));
const Orders = () => {
	const classes = useStyles();
	const { user } = useSelector((state) => state.auth);
	const [oreders, setoreders] = useState([]);
	useEffect(() => {
		if (user) {
			db.collection("users")
				.doc(user?.uid)
				.collection("orders")
				.onSnapshot((snapshot) =>
					setoreders(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					)
				);
		} else {
			setoreders([]);
		}
	}, [user]);
	return (
		<div className={classes.order}>
			<Container className={classes.container}>
				<Typography>Your Orders</Typography>
				{oreders &&
					oreders.map((order, index) => <Order order={order} key={index} />)}
			</Container>
		</div>
	);
};

export default Orders;
