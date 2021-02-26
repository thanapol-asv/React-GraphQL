import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	HttpLink,
	from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import Product from "./pages/Product/Product";
import HistoryPage from "./pages/History/History";
import Navbar from "./components/Navbar";

const errorLink = onError(({ graphQLErrors }) => {
	if (graphQLErrors) {
		graphQLErrors.map(({ message }) => {
			alert(`GraphQL error: ${message}`);
			return null;
		});
	}
});

const link = from([
	errorLink,
	new HttpLink({ uri: "http://localhost:4000/graphql" }),
]);

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: link,
});

const App: React.FC = () => {
	return (
		<div>
			<Router>
				<ApolloProvider client={client}>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/product" component={Product} />
						<Route exact path="/history" component={HistoryPage} />
					</Switch>
				</ApolloProvider>
			</Router>
		</div>
	);
};

export default App;
