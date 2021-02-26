import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import allReducers from "./redux/reducers";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";

const composeEnhancers =
	(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers, composeEnhancers());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
