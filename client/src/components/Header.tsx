import React, { useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import {
	AppBar,
	Toolbar,
	IconButton,
	InputBase,
	Typography,
	Dialog,
	DialogContent,
	Container,
	Button,
	Grid,
	Card,
	CardContent,
	Avatar,
	List,
	Snackbar,
} from "@material-ui/core";
import {
	History,
	ShoppingCart as ShoppingCartIcon,
	Search,
	Remove,
	Add,
} from "@material-ui/icons";
import LightningLogo from "../images/lsLogo.png";
import { useStyles } from "./Styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/reducers";
import {
	increaseItem,
	decreaseItem,
	resetCart,
	addNewTransaction,
} from "../redux/actions";
import { ShoppingCart, createBuyForm, BuyForm } from "./Interface";
import { CREATE_BUY_REQUEST } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";

interface HeaderProps {
	handleSearch: (searchV: string) => void;
	keyword: string;
}

const Header: React.FC<HeaderProps> = ({ handleSearch, keyword }) => {
	const shoppingCart = useSelector((state: RootState) => state.shoppingCart);
	const [searchValue, setSearchValue] = useState<string>("");
	const [toastOpen, setToastOpen] = useState<boolean>(false);
	const [oneTimeRender, setOneTimeRender] = useState<boolean>(false);
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const [toastTransMessage, setToastTransMessage] = useState<string>(
		"Transaction Failed"
	);
	const dispatch = useDispatch();
	const hist = useHistory();
	const classes = useStyles();
	const handleSearchSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	): Promise<void> => {
		e.preventDefault();
		handleSearch(searchValue);
	};

	//SHOPPING CART - - - - - - - - - - - - - - - -
	const [requestItem, { error, loading, data }] = useMutation(
		CREATE_BUY_REQUEST
	);

	const sendRequest = () => {
		let inputRequest: BuyForm = createBuyForm(shoppingCart);
		requestItem({
			variables: {
				form: inputRequest.form,
			},
		});
		dispatch(resetCart());
		setOneTimeRender(true);
		setTotalPrice(0);
	};

	if (error || loading) console.log("Waiting . . .");
	if (data && oneTimeRender) {
		data.requestItem.unSuccess.map((item: string) => {
			alert(`Product ${item} is failed`);
			return null;
		});
		if (data.requestItem.ResponseStatus) {
			dispatch(addNewTransaction(data.requestItem.tid));
			setToastTransMessage("Transaction Successful");
			setToastOpen(true);
		}

		setOneTimeRender(false);
	}
	const [cartOpen, setCartOpen] = useState(false);
	const [, forceUpdate] = useState(true);

	const handleCartOpen = () => {
		setCartOpen(true);
	};
	const handleCartClose = () => {
		setCartOpen(false);
		hist.push("/history");
	};
	const handleDecreaseItem = (item: ShoppingCart) => {
		if (item.quantity > 0) {
			dispatch(decreaseItem(item));
			setTotalPrice((prev) => (prev -= item.products.PRODUCT_PRICE));
			forceUpdate((x) => !x);
		}
	};
	const handleIncreaseItem = (item: ShoppingCart) => {
		if (item.products.PRODUCT_STOCK > item.quantity) {
			dispatch(increaseItem(item));
			setTotalPrice((prev) => (prev += item.products.PRODUCT_PRICE));
			forceUpdate((x) => !x);
		}
	};
	const handleToastClose = () => {
		setToastOpen(false);
		setToastTransMessage("Transaction Failed");
	};

	return (
		<div>
			<AppBar className={classes.barColor}>
				<Toolbar>
					<RouterLink
						to={keyword === "" ? "/home" : `/home?keyword=${keyword}`}>
						<div className={classes.barMainArea}>
							<img
								src={LightningLogo}
								className={classes.barMainLogo}
								alt="logo"
							/>
							<Typography
								variant="body1"
								className={classes.barMainTitle}
								noWrap>
								Lighting Store
							</Typography>
						</div>
					</RouterLink>
					<div className={classes.barRightArea}>
						<div className={classes.barSearchArea}>
							<div className={classes.barSearchIcon}>
								<Search />
							</div>

							<form onSubmit={handleSearchSubmit}>
								<InputBase
									value={searchValue}
									onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
										setSearchValue(e.target.value)
									}
									className={classes.barSearchInput}
									placeholder="Search…"
								/>
							</form>
						</div>

						<div className={classes.barMenuArea}>
							<IconButton onClick={handleCartOpen}>
								<ShoppingCartIcon className={classes.barMenuIcon} />
							</IconButton>
							<RouterLink to="/history">
								<IconButton>
									<History className={classes.barMenuIcon} />
								</IconButton>
							</RouterLink>
						</div>
					</div>
				</Toolbar>
			</AppBar>

			{/* =============================================== Dialog POPUP =============================================== */}
			<Dialog
				onClose={handleCartClose}
				open={cartOpen}
				fullWidth={true}
				maxWidth="md">
				<DialogContent
					style={{ overflow: "hidden", backgroundColor: "#2f3038" }}>
					<Container className={classes.topCartDialog}>
						<ShoppingCartIcon
							className={classes.barMenuIcon}
							fontSize="large"
						/>
					</Container>
					<hr />
					<Container className={classes.middleCartDialog}>
						<List
							style={{
								margin: "auto",
								height: "95%",
								overflow: "auto",
								width: "90%",
								paddingLeft: "5%",
								paddingRight: "5%",
							}}>
							<Grid container spacing={4}>
								{shoppingCart.map((item) => (
									<Grid item xs={12} key={item.products.PRODUCT_ID}>
										<Card className={classes.cartContent}>
											<Avatar
												src={item.products.PRODUCT_IMGSRC}
												className={classes.imageCart}
											/>
											<CardContent className={classes.cartContentInfo}>
												<Typography variant="h5">
													<b>{item.products.PRODUCT_NAME}</b>
												</Typography>
												<Container className={classes.cartContentPrice}>
													<Typography variant="h5">
														{item.products.PRODUCT_PRICE * item.quantity} THB
													</Typography>
												</Container>
												<Container className={classes.cartContentQuantity}>
													<IconButton
														className={classes.cartQuantityBotton}
														onClick={() => handleDecreaseItem(item)}>
														<Remove />
													</IconButton>
													<IconButton className={classes.cartQuantityBotton}>
														{item.quantity}/{item.products.PRODUCT_STOCK}
													</IconButton>
													<IconButton
														className={classes.cartQuantityBotton}
														onClick={() => handleIncreaseItem(item)}>
														<Add />
													</IconButton>
												</Container>
											</CardContent>
										</Card>
									</Grid>
								))}
							</Grid>
						</List>
					</Container>
					<hr />
					<Container className={classes.bottomCartDialog}>
						<Button
							className={classes.landExploreButton}
							fullWidth={true}
							onClick={sendRequest}>
							BUY NOW ({totalPrice} THB)
						</Button>
					</Container>
				</DialogContent>
			</Dialog>

			{/* =============================================== Toast POPUP =============================================== */}

			<Snackbar
				anchorOrigin={{ horizontal: "center", vertical: "top" }}
				open={toastOpen}
				onClose={() => handleToastClose()}
				message={toastTransMessage}
				key="xxx"
			/>
		</div>
	);
};

export default Header;
