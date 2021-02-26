import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
	Container,
	Grid,
	Card,
	CardMedia,
	Typography,
	CardContent,
	Link,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { useStyles } from "../../components/Styles";
import { HomeContentProps } from "../../components/Interface";

const HomeContent: React.FC<HomeContentProps> = ({
	products,
	handlePagination,
	totalPages,
	currentPage,
}) => {
	const classes = useStyles();
	return (
		<Container className={classes.cardGrid} maxWidth="lg">
			<Grid container spacing={4}>
				{products.map((card) => (
					<Grid item key={card.PRODUCT_ID} xs={12} sm={6} md={4} lg={3}>
						<Link
							underline="none"
							component={RouterLink}
							to={`/product?pid=${card.PRODUCT_ID}`}>
							<Card className={classes.card}>
								<CardMedia
									component="div"
									className={classes.cardMedia}
									image={card.PRODUCT_IMGSRC}
									title={card.PRODUCT_ID}
								/>
								<CardContent className={classes.cardContent}>
									<Typography gutterBottom variant="subtitle1">
										<b>{card.PRODUCT_NAME}</b>
									</Typography>
								</CardContent>
								<CardContent>
									<div className={classes.bottomCardPrice}>
										<Typography>{card.PRODUCT_PRICE} THB</Typography>
									</div>
									<div className={classes.bottomCardSeller}>
										<Typography>{card.PRODUCT_SELLER}</Typography>
									</div>
								</CardContent>
							</Card>
						</Link>
					</Grid>
				))}
			</Grid>
			<div className={classes.pagination}>
				<Pagination
					onChange={(e, v) => handlePagination(v)}
					count={totalPages}
					shape="rounded"
					page={currentPage}
				/>
			</div>
		</Container>
	);
};

export default HomeContent;
