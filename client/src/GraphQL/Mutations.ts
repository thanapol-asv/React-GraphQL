import { gql } from "@apollo/client";

export const CREATE_BUY_REQUEST = gql`
	mutation RequestItem($form: [RequestItems!]!) {
		requestItem(form: $form) {
			tid
			unSuccess
			ResponseStatus
		}
	}
`;
