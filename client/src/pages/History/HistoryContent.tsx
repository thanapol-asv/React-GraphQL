import React from "react";
import { Container, Grid, Card, Typography } from "@material-ui/core";
import { useStyles } from "../../components/Styles";
import GridTextRow from "./GridTextRow";
import { TransactionObject } from "../../components/Interface";

const HistoryContent: React.FC<{ transactionDetails: TransactionObject[] }> = ({
	transactionDetails,
}) => {
	const classes = useStyles();
	return transactionDetails.length !== 0 ? (
		<Container className={classes.cardGrid} maxWidth="lg">
			{transactionDetails.map((item) => {
				return (
					<Card
						key={item.tid}
						style={{
							width: "100%",
							padding: "15px",
							marginBottom: "20px",
						}}>
						<Grid container spacing={1}>
							<Grid item xs={12}>
								<Typography variant="subtitle1">
									<i>Transaction ID: {item.tid}</i>
								</Typography>
							</Grid>

							<GridTextRow
								id="Product ID"
								name="Product Name"
								quantity="Quantity"
								price="Price (THB)"
								bold={true}
							/>
							{item.items.map((detail) => {
								return (
									<GridTextRow
										key={detail.PRODUCT_ID}
										id={detail.PRODUCT_ID}
										name={detail.PRODUCT_NAME}
										quantity={detail.QUANTITY.toString()}
										price={detail.THISPRICE.toString()}
										bold={false}
									/>
								);
							})}

							<Grid item xs={7}></Grid>
							<Grid item xs={2} style={{ textAlign: "right" }}>
								<b>Total : </b>
							</Grid>
							<Grid item xs={3}>
								<b>{item.totalPrice}</b>
							</Grid>
						</Grid>
					</Card>
				);
			})}
		</Container>
	) : (
		<Container className={classes.cardGrid} maxWidth="lg">
			<Grid container spacing={1}>
				<Grid item xs={12} style={{ textAlign: "center" }}>
					<Typography variant="h3">
						<b>No Transaction History</b>
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default HistoryContent;
