import React, { useState } from "react";
import { useStyles } from "../../components/Styles";
import {
	Button,
	Container,
	Grid,
	Typography,
	Snackbar,
} from "@material-ui/core";
import {
	ProductDetailsProps,
	ProductDetails,
	ShoppingCart,
	createCartProductDetails,
} from "../../components/Interface";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/actions";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";

const ProductContent: React.FC<ProductDetailsProps> = ({ thisProduct }) => {
	const classes = useStyles();
	const shoppingCart: ShoppingCart[] = useSelector(
		(state: RootState) => state.shoppingCart
	);
	const dispatch = useDispatch();

	const addToCart = (product: ProductDetails) => {
		let isInCart: boolean = false;
		shoppingCart.map((item) => {
			if (item.products.PRODUCT_ID === product.PRODUCT_ID) {
				isInCart = true;
			}
			return null;
		});
		if (!isInCart) {
			const newItem: ShoppingCart = createCartProductDetails(product);
			dispatch(addItem(newItem));
			setToastMessage("Item added to Shopping Cart");
			setToastOpen(true);
		} else {
			setToastMessage("This item is already in exist in the Shopping Cart");
		}
		return null;
	};

	const [toastOpen, setToastOpen] = useState(false);
	const [toastMessage, setToastMessage] = useState(
		"Item added to Shopping Cart"
	);

	return (
		<Container className={classes.cardGrid} maxWidth="lg">
			<Grid container spacing={4} className={classes.detailMainArea}>
				<Grid item xs={12} md={7}>
					<div className={classes.detailImageArea}>
						<img
							src={thisProduct.PRODUCT_IMGSRC}
							className={classes.detailImg}
							alt="img"
						/>
					</div>
				</Grid>
				<Grid item xs={12} md={5}>
					<div className={classes.detailInfoArea}>
						<div className={classes.detailInfoTop}>
							<br />
							<Typography className={classes.detailInfoText1} variant="h4">
								{thisProduct.PRODUCT_NAME}
							</Typography>
							<Typography
								className={classes.detailInfoText1}
								variant="subtitle2">
								({thisProduct.PRODUCT_ID}) BY{" "}
								<b>{thisProduct.PRODUCT_SELLER}</b>
							</Typography>
							<hr />
							<Typography className={classes.detailInfoText} variant="body1">
								{thisProduct.PRODUCT_DESCRIPTION}. It is a light bulb which will
								make your day brighter. It is very efficient and harmless to
								your eyes especially when you reading books or playing
								computers. The effeciency of this bulb is more than 80% of 50
								years ago light bulb.
							</Typography>
						</div>

						<div className={classes.detailBottomArea}>
							<Typography
								className={classes.detailBottomTextRight}
								variant="subtitle1">
								Current Stock: <b>{thisProduct.PRODUCT_STOCK}</b>
							</Typography>
							<Button
								className={classes.detailButton}
								onClick={() => {
									addToCart(thisProduct);
								}}>
								Add to Cart{" "}
							</Button>
						</div>
					</div>
				</Grid>
			</Grid>
			<Snackbar
				anchorOrigin={{ horizontal: "center", vertical: "top" }}
				open={toastOpen}
				onClose={() => setToastOpen(false)}
				message={toastMessage}
				key="xxx"
			/>
		</Container>
	);
};

export default ProductContent;
