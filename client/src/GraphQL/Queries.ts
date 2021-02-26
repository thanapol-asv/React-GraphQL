import { gql } from "@apollo/client";

export const LOAD_HOME_PRODUCTS = gql`
	query Products($filter: String!, $offset: Int!, $limit: Int!) {
		products(filter: $filter, offset: $offset, limit: $limit) {
			products {
				PRODUCT_ID
				PRODUCT_NAME
				PRODUCT_IMGSRC
				PRODUCT_PRICE
				PRODUCT_SELLER
			}
			totalPages
		}
	}
`;

export const LOAD_SPECIFIC_PRODUCT = gql`
	query TheProduct($PRODUCT_ID: ID!) {
		theproduct(PRODUCT_ID: $PRODUCT_ID) {
			PRODUCT_ID
			PRODUCT_NAME
			PRODUCT_DESCRIPTION
			PRODUCT_IMGSRC
			PRODUCT_PRICE
			PRODUCT_SELLER
			PRODUCT_STOCK
		}
	}
`;

export const LOAD_TRANSACTION = gql`
	query GetTransaction($transID: [String!]!) {
		getTransaction(transID: $transID) {
			tid
			items {
				PRODUCT_ID
				PRODUCT_NAME
				THISPRICE
				QUANTITY
			}
			totalPrice
		}
	}
`;
