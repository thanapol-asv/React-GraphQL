const Query = {
	products(parent, args, ctx, info) {
		const { filter, offset, limit } = args;
		const { products } = ctx;
		const lowerfilter = filter.toLowerCase();
		const filteredList = products.filter((item) => {
			return (
				item.PRODUCT_NAME.toLowerCase().includes(lowerfilter) ||
				item.PRODUCT_DESCRIPTION.toLowerCase().includes(lowerfilter) ||
				item.PRODUCT_SELLER.toLowerCase().includes(lowerfilter)
			);
		});
		const currentLength = filteredList.length;
		const totalPages = Math.ceil(currentLength / limit);
		return {
			products: filteredList.splice(
				offset,
				Math.min(limit, currentLength - offset)
			),
			totalPages: totalPages,
		};
	},
	theproduct(parent, args, ctx, info) {
		const { PRODUCT_ID } = args;
		const { products } = ctx;
		const product = products.find((item) => item.PRODUCT_ID === PRODUCT_ID);
		if (!product) {
			throw new Error(`Item with ITEM_ID:(${PRODUCT_ID}) does not exist`);
		}
		return product;
	},
	getTransaction(parent, args, ctx, info) {
		const { transID } = args;
		const { transaction } = ctx;
		var responseTrans = [];
		for (let i = 0; i < transID.length; i++) {
			transaction.map((data) => {
				if (data.tid === transID[i]) {
					responseTrans.push(data);
				}
			});
		}

		return responseTrans;
	},
	getAllTransaction(parent, args, ctx, info) {
		const { transaction } = ctx;
		return transaction;
	},
};

module.exports = Query;
