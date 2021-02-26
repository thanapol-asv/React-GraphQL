import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import ProductContent from "./ProductContent";
import { useQuery } from "@apollo/client";
import { LOAD_SPECIFIC_PRODUCT } from "../../GraphQL/Queries";
import Status from "../../components/Status";
import {
	modelProductDetails,
	ProductDetails,
} from "../../components/Interface";

const Product: React.FC<RouteComponentProps> = (props) => {
	const [thisProduct, setThisProduct] = useState<ProductDetails>(
		modelProductDetails()
	);
	const proID = new URLSearchParams(props.location.search).get("pid") || "";
	const { loading, error, data } = useQuery(LOAD_SPECIFIC_PRODUCT, {
		variables: { PRODUCT_ID: proID },
		fetchPolicy: "network-only",
	});

	useEffect(() => {
		if (loading === false && data) {
			setThisProduct(data.theproduct);
		}
	}, [loading, data]);

	if (error) return <Status statusText={error.message} />;

	if (loading) return <Status statusText="Loading" />;

	return <ProductContent thisProduct={thisProduct} />;
};

export default Product;
