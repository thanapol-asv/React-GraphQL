import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	/* ============== Navigation Bar Styles ============== */
	barColor: {
		backgroundColor: "#2f3038",
		maxWidth: "100vw",
	},
	barMainArea: {
		position: "relative",
		display: "block",
		whiteSpace: "nowrap",
		maxWidth: "50vw",
		"&:hover": {
			cursor: "pointer",
			filter: "brightness(1.25)",
		},
	},
	barMainLogo: {
		position: "relative",
		height: "36px",
		display: "inline-block",
		verticalAlign: "middle",
		marginRight: "10px",
	},
	barMainTitle: {
		position: "relative",
		display: "inline-block",
		verticalAlign: "middle",
		fontWeight: "bolder",
		background: "-webkit-linear-gradient(0, #ff9900 0%, #fbff3c 100%)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		maxWidth: "40vw",
	},
	barSearchArea: {
		backgroundColor: "#505258",
		position: "relative",
		display: "inline-table",
		marginLeft: "2vw",
		padding: "0 2vw 0 2vw",
		borderRadius: "25px",
	},
	barSearchIcon: {
		position: "relative",
		display: "table-cell",
		verticalAlign: "middle",
		top: "50%",
	},
	barSearchInput: {
		maxWidth: "20vw",
		marginLeft: "2vw",
		color: "white",
	},
	barMenuArea: {
		display: "inline-block",
		position: "relative",
		textAlign: "right",
	},
	barMenuIcon: {
		color: "white",
	},
	barRightArea: {
		flex: "1",
		textAlign: "right",
	},

	/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

	/* ============== Shopping Cart Styles ============== */

	topCartDialog: {
		display: "flex",
		height: "7vh",
		alignItems: "center",
		justifyContent: "center",
	},
	middleCartDialog: {
		height: "50vh",
		backgroundColor: "#dcdcdc",
	},
	bottomCartDialog: {
		display: "flex",
		height: "7vh",
		alignItems: "center",
		justifyContent: "center",
	},
	imageCart: {
		width: "75px",
		height: "75px",
		display: "inline-block",
		objectFit: "cover",
	},
	cartContent: {
		display: "flex",
		padding: "10px",
		height: "100%",
		alignItems: "center",
	},
	cartContentInfo: {
		padding: "5px 0 0 15px",
		display: "flex",
		width: "100%",
		height: "90%",
		alignItems: "top",
		position: "relative",
	},
	cartContentQuantity: {
		height: "35%",
		width: "40%",
		bottom: "5px",
		right: "2px",
		position: "absolute",
		padding: "0",
		textAlign: "center",
	},
	cartQuantityBotton: {
		width: "30%",
		height: "100%",
		padding: "0",
	},
	cartQuantityNumber: {
		justifyContent: "center",
		width: "30%",
		height: "100%",
		padding: "0",
		textAlign: "center",
	},
	cartContentPrice: {
		height: "30%",
		width: "30%",
		bottom: "5px",
		left: "15px",
		position: "absolute",
		padding: "0",
		textAlign: "left",
	},

	/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

	/* ============== Land Page Styles ============== */
	landRoot: {
		display: "flex",
		margin: 0,
		width: "100vw",
		height: "100vh",
		backgroundColor: "#2f3038",
	},
	landContainer: {
		display: "flex",
		margin: "auto",
		width: "80%",
		height: "80%",
		alignItems: "center",
		justifyContent: "center",
	},
	landLeft: {
		display: "flex",
		margin: "auto",
		justifyContent: "center",
	},
	landRight: {
		display: "block",
		margin: "auto",
		color: "white",
		textAlign: "center",
		[theme.breakpoints.up("lg")]: {
			textAlign: "left",
		},
	},
	landImage: {
		width: "80%",
	},
	landTextTop: {
		marginBottom: "3vh",
		fontSize: "5vw",
		[theme.breakpoints.down("md")]: {
			fontSize: "6vw",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "7vw",
		},
	},
	landTextBottom: {
		marginBottom: "3vh",
		fontSize: "2.2vw",
		[theme.breakpoints.down("md")]: {
			fontSize: "2.5vw",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "3vw",
		},
	},
	landExploreButton: {
		backgroundColor: "#E9AC10",
		minWidth: "200px",
		height: "50px",
		"&:hover": {
			backgroundColor: "#fbc845",
		},
	},
	/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

	/* ============== HomeContent Styles ============== */
	cardGrid: {
		paddingTop: theme.spacing(12),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
		transition: "transform 0.15s ease-in-out",
		"&:hover": {
			transform: "scale3d(1.05, 1.05, 1)",
		},
	},
	cardMedia: {
		paddingTop: "70%",
	},
	cardContent: {
		lineHeight: "1.5em",
		height: "2.5em",
		overflow: "hidden",
		textOverflow: "ellipsis",
		wordWrap: "break-word",
		width: "90%",
		margin: "auto",
	},
	bottomCardPrice: {
		display: "inline-block",
		width: "30%",
		textAlign: "left",
	},
	bottomCardSeller: {
		display: "inline-block",
		width: "70%",
		textAlign: "right",
	},
	pagination: {
		"& > *": {
			marginTop: theme.spacing(5),
			justifyContent: "center",
			display: "flex",
		},
	},
	/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

	/* ============== HomeContent Styles ============== */
	status: {
		paddingTop: theme.spacing(12),
		paddingBottom: theme.spacing(8),
		textAlign: "center",
	},
	/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

	/* ============== Product Content Styles ============== */
	detailMainArea: {
		backgroundColor: "#dcdcdc",
		textAlign: "left",
		minHeight: "80vh",
	},
	detailImageArea: {
		backgroundColor: "whitesmoke",
		width: "100%",
		height: "100%",
		margin: "auto",
		display: "flex",
	},
	detailImg: {
		width: "100%",
		margin: "auto",
		transition: "transform 0.15s ease-in-out",
		"&:hover": {
			transform: "scale3d(1.05, 1.05, 1)",
		},
	},
	detailInfoArea: {
		backgroundColor: "whitesmoke",
		width: "100%",
		minHeight: "500px",
		height: "100%",
		color: "black",
		position: "relative",
	},
	detailInfoTop: {
		width: "100%",
		height: "80%",
	},
	detailInfoText: {
		marginLeft: "5%",
	},
	detailInfoText1: {
		marginLeft: "5%",
		textAlign: "center",
		[theme.breakpoints.up("md")]: {
			textAlign: "left",
		},
	},
	detailBottomArea: {
		display: "flex",
		width: "100%",
		height: "20%",
		flexDirection: "column",
	},
	detailButton: {
		backgroundColor: "#E9AC10",
		minWidth: "250px",
		height: "50px",
		"&:hover": {
			backgroundColor: "#fbc845",
		},
		marginLeft: "20px",
		marginRight: "20px",
	},
	detailBottomTextRight: {
		display: "inline-text",
		textAlign: "right",
		marginRight: "20px",
	},

	/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

	/* ============== Product Content Styles ============== */
}));

export { useStyles };
