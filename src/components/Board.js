import React, { useState, useEffect } from "react";
import CreateBoard from "./CreateBoard";
import { revealed } from "./Reveal";
import "../App.css";
import Cell from "./Cell";

function Board({ size, mines }) {
	const [mineLocation, setMineLocation] = useState([]);
	const [nonMineCount, setNonMineCount] = useState(0);
	const [flagCount, setFlagCount] = useState(10);
	const [isLose, setIsLose] = useState(false);
	const [isWin, setIsWin] = useState(false);
	const [grid, setGrid] = useState([]);

	useEffect(() => {
		freshBoard();
	}, []);

	const freshBoard = () => {
		const newBoard = CreateBoard(size, size, mines);
		setFlagCount(mines);
		setNonMineCount(size * size - mines);
		setMineLocation(newBoard.mineLocation);
		setGrid(newBoard.board);
		setIsWin(false);
		setIsLose(false);
	};

	const updateFlag = (e, x, y) => {
		e.preventDefault();

		let newGrid = JSON.parse(JSON.stringify(grid));

		if (flagCount >= 0 && !newGrid[x][y].revealed) {
			if (newGrid[x][y].flagged === false && flagCount > 0) {
				newGrid[x][y].flagged = true;
				setFlagCount(flagCount - 1);
			} else if (newGrid[x][y].flagged === true) {
				newGrid[x][y].flagged = false;
				setFlagCount(flagCount + 1);
			}
			setGrid(newGrid);
		}
	};

	const revealCell = (x, y) => {
		let newGrid = JSON.parse(JSON.stringify(grid));
		if (newGrid[x][y].value === "X") {
			/* for (let i = 0; i < mineLocation.length; i++) {
				newGrid[mineLocation[i][0]][mineLocation[i][1]].revealed = true;
			} */
			for (let i = 0; i < size; i++) {
				for (let j = 0; j < size; j++) {
					newGrid[i][j].revealed = true;
					if (newGrid[i][j].flagged && newGrid[i][j].value === "X") {
						newGrid[i][j].revealed = false;
					}
				}
			}
			setGrid(newGrid);
			setIsLose(true);
		}
		let revealedBoard = revealed(newGrid, x, y, nonMineCount, flagCount);
		setGrid(revealedBoard.arr);
		setNonMineCount(revealedBoard.newNonMines);
		setFlagCount(revealedBoard.count);
		if (revealedBoard.newNonMines === 0) {
			setIsWin(true);
		}
	};

	return (
		<div className="container">
			<h2> MINESWEEPER</h2>
			<h3 style={{ color: "red", textAlign: "center", margin: "0px" }}>
				Mines remaining: {flagCount}
			</h3>
			<div className="fields-container">
				{grid.map((singlerow, index1) => {
					return (
						<div className="field" key={index1}>
							{singlerow.map((singlecol, index2) => {
								return (
									<Cell
										details={singlecol}
										key={index2}
										updateFlag={updateFlag}
										revealCell={revealCell}
										isCellDisabled={isWin || isLose ? true : false}
									/>
								);
							})}
						</div>
					);
				})}
			</div>
			{isWin ? (
				<div className="game-win">
					<h3>{`You won! :) `}</h3>
					<button onClick={() => freshBoard()}>Play again?</button>
				</div>
			) : isLose ? (
				<div className="game-lose">
					<h3>{`You lost. :(`}</h3>
					<button onClick={() => freshBoard()}>Play again?</button>
				</div>
			) : null}
		</div>
	);
}

export default Board;
