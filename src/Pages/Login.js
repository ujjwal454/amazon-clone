import React, { useState, useEffect } from "react";
import {
	Container,
	makeStyles,
	Typography,
	Paper,
	TextField,
	Button,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginInitiate } from "../redux/actions/action";
const useStyles = makeStyles((theme) => ({
	logo: {
		width: 200,
		margin: "50px auto",
	},
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		width: "500px",
		maxWidth: "80%",
		padding: "20px",
		margin: "auto",
		[theme.breakpoints.down("md")]: {
			maxWidth: "300px",
			width: "auto",
		},
	},
	heading: {
		textAlign: "center",
		marginBottom: "25px",
		fontWeight: "600",
	},
	form: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	input: {
		width: "90%",
		margin: " 10px  auto",
	},
	button: {
		backgroundColor: "#ff9900",
		fontWeight: "600",
		width: "50%",
		margin: "20px 0 ",
	},
	link: {
		color: "inherit",
		TextDecoration: "none",
	},
}));
const Login = () => {
	const classes = useStyles();
	const [Email, setEmail] = useState("");
	const [Password, setPassword] = useState("");
	const dispatch = useDispatch();
	const history = useHistory();
	const { user } = useSelector((state) => state.auth);
	useEffect(() => {
		if (user) {
			alert(
				"you are already logged in please logout and then try to login with a new account or the same account "
			);
			history.push("/");
		}
	}, [user]);
	const handelSubmit = (e) => {
		e.preventDefault();
		if (Email === "" || Password === "") {
			alert(
				"Please fill the fields with valid values and then try to submit it"
			);
		} else {
			dispatch(loginInitiate(Email, Password));
			setEmail("");
			setPassword("");
			history.push("/");
		}
	};
	return (
		<Container className={classes.container}>
			<Link to="/" className={classes.logoContainer}>
				<img
					src="https://raw.githubusercontent.com/trickjsprogram/amazon-resource/master/Amazon_Logo.png"
					alt="amazone-logo"
					className={classes.logo}
				/>
			</Link>
			<div className={classes.loginContainer}>
				<Paper elevation={1} className={classes.paper}>
					<form className={classes.form} onSubmit={handelSubmit}>
						<Typography variant="h4" className={classes.heading}>
							Login
						</Typography>
						<TextField
							variant="outlined"
							className={classes.input}
							placeholder="Email"
							value={Email}
							onChange={(e) => setEmail(e.target.value)}
							type="email"
						/>
						<TextField
							variant="outlined"
							className={classes.input}
							placeholder="Password"
							value={Password}
							onChange={(e) => setPassword(e.target.value)}
							type="password"
						/>
						<Button
							variant="contained"
							className={classes.button}
							type="submit"
						>
							Login
						</Button>
					</form>
					<Typography
						variant="h6"
						color="textSecondary"
						className={classes.heading}
					>
						<Link to="/register" className={classes.link}>
							Dont Have An Accout? SignUp
						</Link>
					</Typography>
				</Paper>
			</div>
		</Container>
	);
};

export default Login;
