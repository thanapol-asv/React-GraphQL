import React, { useState } from "react";
import { Dialog } from "@material-ui/core";

const ShoppingCartComp: React.FC = () => {
	const [open, setOpen] = useState(false);

	return <Dialog open={open}></Dialog>;
};

export default ShoppingCartComp;
