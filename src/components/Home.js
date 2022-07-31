import React from "react";
import { headerItems } from "../utils";
import Slider from "./Slider";
import { products } from "../utils";
import { banner } from "../utils";
import Product from "./Product";
import BackToTop from "./BackToTop";
import SingleImage from "./SingleImage";
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
const useStyles = makeStyles((theme) => ({
	homeContainer: {
		marginTop: "70px",
		// minWidth: "120vh",
	},
	headerLinks: {
		display: "flex",
		alignItems: "center",
		height: "50px",
		backgroundColor: "#26241f",
		color: "#fff",
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},
	link: {
		marginRight: "10px",
		cursor: "pointer",
	},
	Slider: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	SingleImage: {
		display: "none",
		[theme.breakpoints.down("xs")]: {
			display: "block",
		},
	},
}));
const Home = () => {
	const links = headerItems;
	const bannerImages = banner;
	const classes = useStyles();
	const items = products;
	return (
		<div className={classes.homeContainer}>
			<div className={classes.headerLinks}>
				{links &&
					links.map((link, index) => (
						<Typography variant="body1" className={classes.link} key={index}>
							{link}
						</Typography>
					))}
			</div>
			<div>
				<div className={classes.imageSlider}>
					<div className={classes.Slider}>
						<Slider Images={bannerImages} />
					</div>
					<div className={classes.SingleImage}>
						<SingleImage />
					</div>
				</div>
				<div className={classes.homeRow}>
					<Product />
				</div>
			</div>
			<BackToTop />
		</div>
	);
};

export default Home;
