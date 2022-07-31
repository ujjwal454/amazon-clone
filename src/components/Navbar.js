import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	makeStyles,
	Container,
	InputBase,
	Icon,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
	KeyboardArrowDown,
	LocationOnOutlined,
	Search,
	ShoppingCartOutlined,
} from "@material-ui/icons";
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";
import { logoutInitiate } from "../redux/actions/action";
const useStyles = makeStyles((theme) => ({
	appBar: {
		position: "fixed",
		top: 0,
		// width: "100%",
	},
	Toolbar: {
		backgroundColor: "#0F1111",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
		height: "10.5vh",
		padding: "5px",
		[theme.breakpoints.down("md")]: {
			justifyContent: "space-between",
			width: "100%",
		},
	},
	icon: {
		maxWidth: "120px",
		marginTop: "20px",
		marginLeft: "20px",
		[theme.breakpoints.down("md")]: {
			width: "100px",
		},
	},
	location: {
		display: "flex",
		alignItems: "center",
		minWidth: "190px",
		// marginRight: -100,
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
	boldText: {
		fontWeight: "600",
		cursor: "pointer",
	},
	input: {
		display: "flex",
		alignItems: "center",
		width: 500,
		position: "static",
		// marginLeft: -100,
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
		// [theme.breakpoints.down("sm")]: {
		// 	display: "none",
		// },
	},
	textField: {
		color: "#000",
		marginLeft: "10px",
		flexGrow: 1,
	},
	inputFields: {
		backgroundColor: "#fff",
		color: "#000",
		display: "flex",
		alignItems: "center",
		width: "100%",
	},
	Search: {
		backgroundColor: "#FCD200",
		color: "#000",
		height: "100%",
		fontWeight: "600",
		// borderRadius: "none",
	},
	endLinks: {
		display: "flex",
		alignItems: "center",
		marginRight: "20px",
		[theme.breakpoints.down("md")]: {
			fontSize: "10px",
		},
	},
	text: {
		marginRight: "20px",
	},
	shoppingCart: {
		display: "flex",
		alignItems: "center",
	},
	mdfont: {
		[theme.breakpoints.down("md")]: {
			fontSize: "10px",
		},
	},
}));
const Navbar = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { user } = useSelector((state) => state.auth);
	const { basket } = useSelector((state) => state.cart);
	const classes = useStyles();
	const handleClick = () => {
		if (!user) {
			history.push("/login");
		} else {
			alert("Are You Sure?");
			dispatch(logoutInitiate());
			history.push("/");
		}
	};
	return (
		<>
			<AppBar className={classes.AppBar}>
				<Toolbar className={classes.Toolbar}>
					<Link to="/">
						{" "}
						<img
							src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
							alt=""
							className={classes.icon}
						/>
					</Link>
					<div className={classes.location}>
						<LocationOnOutlined />
						<div className={classes.text}>
							<Typography variant="body2">hello</Typography>
							<Typography variant="body2" className={classes.boldText}>
								Select Your Address
							</Typography>
						</div>
					</div>
					<div className={classes.input}>
						<div className={classes.inputFields}>
							<Button
								variant="contained"
								color="default"
								endIcon={<KeyboardArrowDown />}
							>
								All
							</Button>
							<InputBase className={classes.textField} />
							<Button
								variant="contained"
								color="default"
								className={classes.Search}
							>
								<Search />
							</Button>
						</div>
					</div>
					<div className={classes.endLinks}>
						<div className={classes.text}>
							<Typography variant="body2" className={classes.mdfont}>
								Hello {user ? user.email : "Guest"}
							</Typography>
							<Typography
								variant="body2"
								className={classes.boldText}
								onClick={handleClick}
							>
								{user ? "Sign Out" : "Sign In"}
							</Typography>
						</div>
						<div>
							<Typography variant="body2" className={classes.mdfont}>
								Return
							</Typography>
							<Typography variant="body2" className={classes.boldText}>
								<Link to="/orders" className={classes.text}>
									& orders
								</Link>
							</Typography>
						</div>
						<div>
							<Link to="/checkout" className={classes.shoppingCart}>
								<ShoppingCartOutlined />
								<Typography variant="body2" className={classes.boldText}>
									{basket ? basket.length : 0}
								</Typography>
							</Link>
						</div>
					</div>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
