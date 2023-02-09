import React from "react";
import "../App.css";

export default function Cell({
	details,
	updateFlag,
	revealCell,
	isCellDisabled,
}) {
	const click = () => {
		revealCell(details.x, details.y);
	};

	const rightClick = (e) => {
		updateFlag(e, details.x, details.y);
	};

	const style = {
		cellStyle: {
			width: 40,
			height: 40,
			backgroundColor:
				details.revealed && details.value !== 0
					? details.value === "X"
						? "red"
						: "#00226d"
					: details.revealed && details.value === 0
					? "#00226f"
					: "#000",
			opacity: "0.8",
			border: "3px solid white",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			fontSize: "20px",
			curosor: "pointer",
			color: "white",
			fontWeight: "1000",
		},
	};

	return (
		<div
			style={style.cellStyle}
			className={isCellDisabled ? "cell-disabled" : null}
			onClick={click}
			onContextMenu={rightClick}>
			{!details.revealed && details.flagged
				? "🚩"
				: details.revealed && details.value !== 0
				? details.value === "X"
					? "💣"
					: details.value
				: ""}
		</div>
	);
}
