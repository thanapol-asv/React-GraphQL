export interface HomeCard {
	PRODUCT_ID: string;
	PRODUCT_NAME: string;
	PRODUCT_PRICE: number;
	PRODUCT_SELLER: string;
	PRODUCT_IMGSRC: string;
}
export const modelHomeCard = () => {
	return {
		PRODUCT_ID: "",
		PRODUCT_NAME: "",
		PRODUCT_PRICE: 0,
		PRODUCT_SELLER: "",
		PRODUCT_IMGSRC: "",
	};
};

export interface HomeContentProps {
	products: HomeCard[];
	totalPages: number;
	currentPage: number;
	handlePagination: (page: number) => void;
}

export interface ShoppingCart {
	products: ProductDetails;
	quantity: number;
}
export const createEmptyCart = () => {
	return {
		products: modelProductDetails(),
		quantity: 0,
	};
};

export interface ProductDetails {
	PRODUCT_ID: string;
	PRODUCT_NAME: string;
	PRODUCT_DESCRIPTION: string;
	PRODUCT_IMGSRC: string;
	PRODUCT_PRICE: number;
	PRODUCT_SELLER: string;
	PRODUCT_STOCK: number;
}

export const createCartProductDetails = (product: ProductDetails) => {
	return {
		products: product,
		quantity: 0,
	};
};

export const modelProductDetails = () => {
	return {
		PRODUCT_ID: "",
		PRODUCT_NAME: "",
		PRODUCT_DESCRIPTION: "",
		PRODUCT_IMGSRC: "",
		PRODUCT_PRICE: 0,
		PRODUCT_SELLER: "",
		PRODUCT_STOCK: 0,
	};
};

export interface ProductDetailsProps {
	thisProduct: ProductDetails;
}

export interface RequestItems {
	PRODUCT_ID: string;
	quantity: number;
}

export interface BuyForm {
	form: RequestItems[];
}

export const createBuyForm = (cartInfo: ShoppingCart[]) => {
	let instance: RequestItems[] = [];
	cartInfo.map((item) => {
		instance.push({
			PRODUCT_ID: item.products.PRODUCT_ID,
			quantity: item.quantity,
		});
		return null;
	});

	return {
		form: instance,
	};
};

export interface TransactionModel {
	PRODUCT_ID: string;
	PRODUCT_NAME: string;
	QUANTITY: number;
	THISPRICE: number;
}

export interface TransactionObject {
	tid: string;
	items: TransactionModel[];
	totalPrice: number;
}
