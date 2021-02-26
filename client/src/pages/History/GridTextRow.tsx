import React from "react";
import { Grid, Typography } from "@material-ui/core";

interface GridTextProps {
	id: string;
	name: string;
	quantity: string;
	price: string;
	bold: boolean;
}

const GridTextRow: React.FC<GridTextProps> = ({
	id,
	name,
	quantity,
	price,
	bold,
}) => {
	return bold ? (
		<>
			<Grid item xs={3}>
				<Typography>
					<b>{id}</b>
				</Typography>
			</Grid>
			<Grid item xs={4}>
				<Typography>
					<b>{name}</b>
				</Typography>
			</Grid>
			<Grid item xs={2}>
				<Typography>
					<b>{quantity}</b>
				</Typography>
			</Grid>
			<Grid item xs={3}>
				<Typography>
					<b>{price}</b>
				</Typography>
			</Grid>
		</>
	) : (
		<>
			<Grid item xs={3}>
				<Typography>{id}</Typography>
			</Grid>
			<Grid item xs={4}>
				<Typography>{name}</Typography>
			</Grid>
			<Grid item xs={2}>
				<Typography>{quantity}</Typography>
			</Grid>
			<Grid item xs={3}>
				<Typography>{price}</Typography>
			</Grid>
		</>
	);
};

export default GridTextRow;
