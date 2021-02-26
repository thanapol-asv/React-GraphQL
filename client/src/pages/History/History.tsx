import React, { useEffect, useState } from "react";
import HistoryContent from "./HistoryContent";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { RootState } from "../../redux/reducers";
import { LOAD_TRANSACTION } from "../../GraphQL/Queries";
import Status from "../../components/Status";
import { TransactionObject } from "../../components/Interface";

const History: React.FC = () => {
	const shoppingCart = useSelector((state: RootState) => state.transaction);
	const [transactionDetails, setTransactionDetails] = useState<
		TransactionObject[]
	>([]);
	const { loading, error, data } = useQuery(LOAD_TRANSACTION, {
		variables: { transID: shoppingCart },
		fetchPolicy: "network-only",
	});
	useEffect(() => {
		if (loading === false && data) {
			setTransactionDetails(data.getTransaction);
		}
	}, [loading, data]);

	if (error) return <Status statusText={error.message} />;

	if (loading) return <Status statusText="Loading" />;
	return <HistoryContent transactionDetails={transactionDetails} />;
};

export default History;
