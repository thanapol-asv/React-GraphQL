interface ActionTransaction {
	type: string;
	tid: string;
}

const transactionReducer = (
	state: string[] = [],
	action: ActionTransaction
) => {
	switch (action.type) {
		case "addNewTransaction": {
			state.push(action.tid);
			return state;
		}
		default:
			return state;
	}
};
export default transactionReducer;
