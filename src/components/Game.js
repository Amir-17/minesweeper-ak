import React, { useState } from "react";
import "../App.css";
import Board from "./Board";

const Game = () => {
	const boardSize = 8;
	const mines = 10;
	const [showBoard, setShowBoard] = useState(false);

	return (
		<div className="game">
			{!showBoard && (
				<div>
					<h1>Minesweeper</h1>
					<button
						className="play-button"
						onClick={() => {
							setShowBoard(true);
						}}>
						PLAY
					</button>
				</div>
			)}
			{showBoard && <Board size={boardSize} mines={mines} />}
		</div>
	);
};

export default Game;
