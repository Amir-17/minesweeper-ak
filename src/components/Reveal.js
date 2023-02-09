export const revealed = (arr, x, y, newNonMines, fcount) => {
	let show = [];
	show.push(arr[x][y]);
	let count = fcount;
	while (show.length !== 0) {
		let one = show.pop();
		let i = one.x;
		let j = one.y;
		if (!one.revealed) {
			newNonMines--;
			one.revealed = true;
		}
		if (one.flagged) {
			count = count + 1;
			one.flagged = false;
		}
		if (one.value !== 0) {
			break;
		}

		if (
			i > 0 &&
			j > 0 &&
			arr[i - 1][j - 1].value === 0 &&
			!arr[i - 1][j - 1].revealed
		) {
			if (arr[i - 1][j - 1].flagged) {
				count = count + 1;
				arr[i - 1][j - 1].flagged = false;
			}
			show.push(arr[i - 1][j - 1]);
		}

		if (
			i < arr.length - 1 &&
			j < arr[0].length - 1 &&
			arr[i + 1][j + 1].value === 0 &&
			!arr[i + 1][j + 1].revealed
		) {
			if (arr[i + 1][j + 1].flagged) {
				count = count + 1;
				arr[i + 1][j + 1].flagged = false;
			}
			show.push(arr[i + 1][j + 1]);
		}

		if (
			i > 0 &&
			j < arr[0].length - 1 &&
			arr[i - 1][j + 1].value === 0 &&
			!arr[i - 1][j + 1].revealed
		) {
			if (arr[i - 1][j + 1].flagged) {
				count = count + 1;
				arr[i - 1][j + 1].flagged = false;
			}
			show.push(arr[i - 1][j + 1]);
		}

		if (
			i < arr.length - 1 &&
			j > 0 &&
			arr[i + 1][j - 1].value === 0 &&
			!arr[i + 1][j - 1].revealed
		) {
			if (arr[i + 1][j - 1].flagged) {
				count = count + 1;
				arr[i + 1][j - 1].flagged = false;
			}
			show.push(arr[i + 1][j - 1]);
		}

		if (i > 0 && arr[i - 1][j].value === 0 && !arr[i - 1][j].revealed) {
			if (arr[i - 1][j].flagged) {
				count = count + 1;
				arr[i - 1][j].flagged = false;
			}
			show.push(arr[i - 1][j]);
		}

		if (
			j < arr[0].length - 1 &&
			arr[i][j + 1].value === 0 &&
			!arr[i][j + 1].revealed
		) {
			if (arr[i][j + 1].flagged) {
				count = count + 1;
				arr[i][j + 1].flagged = false;
			}
			show.push(arr[i][j + 1]);
		}

		if (
			i < arr.length - 1 &&
			arr[i + 1][j].value === 0 &&
			!arr[i + 1][j].revealed
		) {
			if (arr[i + 1][j].flagged) {
				count = count + 1;
				arr[i + 1][j].flagged = false;
			}
			show.push(arr[i + 1][j]);
		}

		if (j > 0 && arr[i][j - 1].value === 0 && !arr[i][j - 1].revealed) {
			if (arr[i][j - 1].flagged) {
				count = count + 1;
				arr[i][j - 1].flagged = false;
			}
			show.push(arr[i][j - 1]);
		}

		if (i > 0 && j > 0 && !arr[i - 1][j - 1].revealed) {
			if (arr[i - 1][j - 1].flagged) {
				count = count + 1;
				arr[i - 1][j - 1].flagged = false;
			}

			arr[i - 1][j - 1].revealed = true;
			newNonMines--;
		}

		if (j > 0 && !arr[i][j - 1].revealed) {
			if (arr[i][j - 1].flagged) {
				count = count + 1;
				arr[i][j - 1].flagged = false;
			}

			arr[i][j - 1].revealed = true;
			newNonMines--;
		}

		if (i < arr.length - 1 && j > 0 && !arr[i + 1][j - 1].revealed) {
			if (arr[i + 1][j - 1].flagged) {
				count = count + 1;
				arr[i + 1][j - 1].flagged = false;
			}

			arr[i + 1][j - 1].revealed = true;
			newNonMines--;
		}

		if (i > 0 && !arr[i - 1][j].revealed) {
			if (arr[i - 1][j].flagged) {
				count = count + 1;
				arr[i - 1][j].flagged = false;
			}

			arr[i - 1][j].revealed = true;
			newNonMines--;
		}

		if (i < arr.length - 1 && !arr[i + 1][j].revealed) {
			if (arr[i + 1][j].flagged) {
				count = count + 1;
				arr[i + 1][j].flagged = false;
			}

			arr[i + 1][j].revealed = true;
			newNonMines--;
		}

		if (i > 0 && j < arr[0].length - 1 && !arr[i - 1][j + 1].revealed) {
			if (arr[i - 1][j + 1].flagged) {
				count = count + 1;
				arr[i - 1][j + 1].flagged = false;
			}

			arr[i - 1][j + 1].revealed = true;
			newNonMines--;
		}

		if (j < arr[0].length - 1 && !arr[i][j + 1].revealed) {
			if (arr[i][j + 1].flagged) {
				count = count + 1;
				arr[i][j + 1].flagged = false;
			}

			arr[i][j + 1].revealed = true;
			newNonMines--;
		}

		if (
			i < arr.length - 1 &&
			j < arr[0].length - 1 &&
			!arr[i + 1][j + 1].revealed
		) {
			if (arr[i + 1][j + 1].flagged) {
				count = count + 1;
				arr[i + 1][j + 1].flagged = false;
			}

			arr[i + 1][j + 1].revealed = true;
			newNonMines--;
		}
	}

	return { arr, newNonMines, count };
};
