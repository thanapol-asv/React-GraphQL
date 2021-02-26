import React from "react";
import { Container, Typography } from "@material-ui/core";
import { useStyles } from "./Styles";

interface StatusProps {
	statusText: string;
}

const Status: React.FC<StatusProps> = ({ statusText }) => {
	const classes = useStyles();

	return (
		<Container className={classes.status} maxWidth="lg">
			<Typography variant="h4">{statusText}</Typography>
		</Container>
	);
};

export default Status;
