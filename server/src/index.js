const { GraphQLServer } = require("graphql-yoga");

const products = require("./utils/items");
const transaction = require("./utils/transaction");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");

const server = new GraphQLServer({
	typeDefs: "./src/schema.graphql",
	resolvers: {
		Query,
		Mutation,
	},
	context: {
		products,
		transaction,
	},
});

const options = {
	port: 4000,
	endpoint: "/graphql",
};

server.start(options, ({ port }) => {
	console.log(`Server is running on PORT: ${port}`);
});
