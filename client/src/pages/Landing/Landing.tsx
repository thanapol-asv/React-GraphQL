import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Button, Grid } from "@material-ui/core";
import lsLogo from "../../images/lsLogo.png";
import { useStyles } from "../../components/Styles";

const Landing: React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.landRoot}>
			<Grid container spacing={3} className={classes.landContainer}>
				<Grid item xs={8} lg={5} className={classes.landLeft}>
					<img src={lsLogo} alt="logo" className={classes.landImage} />
				</Grid>
				<Grid item xs={8} lg={6} className={classes.landRight}>
					<Typography variant="h1" className={classes.landTextTop} noWrap>
						Lighting Store
					</Typography>
					<Typography variant="h3" className={classes.landTextBottom} noWrap>
						Make your day brighter
					</Typography>
					<Button
						className={classes.landExploreButton}
						component={RouterLink}
						to="/home">
						Explore
					</Button>
				</Grid>
			</Grid>
		</div>
	);
};

export default Landing;
