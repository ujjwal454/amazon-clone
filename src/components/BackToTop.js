import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	topLink: {
		padding: "10px 0",
		backgroundColor: "#323238",
		color: "#fff",
		width: "100%",
		textAlign: "center",
		cursor: "pointer",
	},
}));
const BackToTop = () => {
	const classes = useStyles();
	const toTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<div className={classes.topLink} onClick={toTop}>
			<Typography variant="h5">Back To Top</Typography>
		</div>
	);
};

export default BackToTop;
