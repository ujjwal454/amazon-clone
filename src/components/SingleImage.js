import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { banner } from "../utils";
import "./image.css";
const useStyles = makeStyles((theme) => ({}));
const SingleImage = () => {
	const images = banner;
	const [Index, setIndex] = useState(0);
	useEffect(() => {
		const length = images.length - 1;
		const interval = setInterval(() => {
			if (Index < length) {
				setIndex(Index + 1);
			} else if (Index === length) {
				setIndex(0);
			}
		}, 5000);
		return () => clearInterval(interval);
	}, [Index, images]);
	const classes = useStyles();
	return (
		<div className="single-image">
			<img src={images[Index]} alt="banner" className="imageSingle" />
		</div>
	);
};

export default SingleImage;
