import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { LOAD_HOME_PRODUCTS } from "../../GraphQL/Queries";
import HomeContent from "./HomeContent";
import Status from "../../components/Status";
import { RouteComponentProps } from "react-router-dom";
import { HomeCard, modelHomeCard } from "../../components/Interface";

const Home: React.FC<RouteComponentProps> = (props) => {
	const [products, setProducts] = useState<HomeCard[]>([modelHomeCard()]);
	const [offSet, setOffSet] = useState<number>(0);
	const [limit, setLimit] = useState<number>(10);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(0);
	const keyword =
		new URLSearchParams(props.location.search).get("keyword") || "";

	const { loading, error, data } = useQuery(LOAD_HOME_PRODUCTS, {
		variables: { filter: keyword, offset: offSet, limit: limit },
	});

	const handlePagination = (page: number) => {
		setCurrentPage(page);
		setOffSet((page - 1) * limit);
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		if (loading === false && data) {
			setProducts(data.products.products);
			setTotalPages(data.products.totalPages);
		}
	}, [loading, data]);

	if (error) return <Status statusText={error.message} />;

	if (loading) return <Status statusText="Loading" />;

	if (products.length === 0) return <Status statusText="No Products Found" />;
	return (
		<HomeContent
			products={products}
			totalPages={totalPages}
			handlePagination={handlePagination}
			currentPage={currentPage}
		/>
	);
};

export default Home;
