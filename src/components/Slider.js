import React, { useState, useEffect } from "react";
import { ArrowForwardIos, ArrowBackIos } from "@material-ui/icons";
import "./Slider.css";
const Slider = ({ Images }) => {
	const [Index, setIndex] = useState(0);
	useEffect(() => {
		const lastIndex = Images.length - 1;
		if (Index < 0) {
			setIndex(lastIndex);
		} else if (Index === lastIndex) {
			setIndex(0);
		}
	}, [Index, Images]);
	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(Index + 1);
		}, 5000);
		return () => {
			clearInterval(slider);
		};
	}, [Index]);
	return (
		<>
			<div className="section">
				<div className="section-center">
					{Images &&
						Images.map((image, imageIndex) => {
							let position = "nextSlide";
							if (imageIndex === Index) {
								position = "activeSlide";
							}
							if (
								imageIndex === Index - 1 ||
								(Index === 0 && imageIndex === Images.length - 1)
							) {
								position = "lastSlide";
							} //may this line case problem
							return (
								<article className={position} key={imageIndex}>
									<img
										src={image}
										alt="banner image"
										className="banner-image"
									/>
								</article>
							);
						})}
					<p className="prevButton" onClick={() => setIndex(Index - 1)}>
						<ArrowBackIos />
					</p>
					<p className="nextButton" onClick={() => setIndex(Index + 1)}>
						<ArrowForwardIos />
					</p>
				</div>
			</div>
		</>
	);
};

export default Slider;
