import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar } from "@mui/material";
import "./TableRank.scss";

function TableRank() {
	const [players, setPlayers] = useState([
		{ name: "Alice", score: 500, image: "https://i.pravatar.cc/40?img=1", resolves: 24 },
		{ name: "Bob", score: 400, image: "https://i.pravatar.cc/40?img=2", resolves: 24 },
		{ name: "Charlie", score: 300, image: "https://i.pravatar.cc/40?img=3", resolves: 24 },
		{ name: "Dave", score: 200, image: "https://i.pravatar.cc/40?img=4", resolves: 24 },
		{ name: "Eve", score: 100, image: "https://i.pravatar.cc/40?img=5", resolves: 24 },
		{ name: "Alice", score: 500, image: "https://i.pravatar.cc/40?img=6", resolves: 24 },
		{ name: "Bob", score: 400, image: "https://i.pravatar.cc/40?img=7", resolves: 24 },
		{ name: "Charlie", score: 300, image: "https://i.pravatar.cc/40?img=8", resolves: 24 },
		{ name: "Dave", score: 200, image: "https://i.pravatar.cc/40?img=9", resolves: 24 },
		{ name: "Eve", score: 100, image: "https://i.pravatar.cc/40?img=10", resolves: 24 },
	]);

	const addPlayer = (name, score, image, resolves) => {
		const newPlayer = { name, score, image, resolves };
		setPlayers([...players, newPlayer]);
	};

	const rows = players.map((player, index) => {
		return { ...player, rank: index + 1 };
	});

    return (
		<div className="table" >
			<TableContainer sx={{ width: "300px", display: "flex" }}>
				<Table className="table" aria-label="Ranking table">
					<TableHead className="table-head">
						<TableRow>
							<TableCell style={{ color: "#fff" }} align="left">
								Rank
							</TableCell>
							<TableCell style={{ color: "#fff" }} align="center">
								Usuario
							</TableCell>
							<TableCell></TableCell>
							<TableCell align="center" style={{ color: "#fff" }}>
								Score
							</TableCell>
							<TableCell align="center" style={{ color: "#fff" }}>
								Quizes
							</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.name} className="row">
								<TableCell component="th" scope="row" align="left">
									{row.rank}
								</TableCell>
								<TableCell align="left">
									<Avatar alt={row.name} src={row.image} />
								</TableCell>
								<TableCell align="left">{row.name}</TableCell>
								<TableCell align="center">{row.score}</TableCell>
								<TableCell align="center">{row.resolves}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default TableRank;
