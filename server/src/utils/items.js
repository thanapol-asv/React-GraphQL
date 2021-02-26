const products = [
	{
		PRODUCT_ID: "PRO-A-001",
		PRODUCT_NAME: "PRODUCT A 001",
		PRODUCT_DESCRIPTION: "THIS IS PRODUCT A 001",
		PRODUCT_IMGSRC:
			"https://www.assets.signify.com/is/image/PhilipsLighting/44a64185b9d9444096bea9b90094d2f2?wid=494&hei=435&$pnglarge$",
		PRODUCT_PRICE: 10,
		PRODUCT_SELLER: "Company A",
		PRODUCT_STOCK: 100,
	},
	{
		PRODUCT_ID: "PRO-A-002",
		PRODUCT_NAME: "PRODUCT A 002",
		PRODUCT_DESCRIPTION: "THIS IS PRODUCT A 002",
		PRODUCT_IMGSRC:
			"https://www.assets.signify.com/is/image/PhilipsLighting/6ae67d6296d34fd59747a9b90094cf3d?wid=494&hei=435&$pnglarge$",
		PRODUCT_PRICE: 20,
		PRODUCT_SELLER: "Company A",
		PRODUCT_STOCK: 120,
	},
	{
		PRODUCT_ID: "PRO-A-003",
		PRODUCT_NAME: "PRODUCT A 003",
		PRODUCT_DESCRIPTION: "THIS IS PRODUCT A 003",
		PRODUCT_IMGSRC:
			"https://www.assets.signify.com/is/image/PhilipsLighting/3c2bb22cf5004ab49350ac4000bea0a6?wid=494&hei=435&$pnglarge$",
		PRODUCT_PRICE: 30,
		PRODUCT_SELLER: "Company A",
		PRODUCT_STOCK: 10,
	},
	{
		PRODUCT_ID: "PRO-A-004",
		PRODUCT_NAME: "PRODUCT A 004",
		PRODUCT_DESCRIPTION: "THIS IS PRODUCT A 004",
		PRODUCT_IMGSRC:
			"https://www.assets.signify.com/is/image/PhilipsLighting/ea3567ca4f894169b8dcaa450077997f?wid=494&hei=435&$pnglarge$",
		PRODUCT_PRICE: 40,
		PRODUCT_SELLER: "Company A",
		PRODUCT_STOCK: 30,
	},
	{
		PRODUCT_ID: "PRO-A-005",
		PRODUCT_NAME: "PRODUCT A 005",
		PRODUCT_DESCRIPTION: "THIS IS PRODUCT A 005",
		PRODUCT_IMGSRC:
			"https://www.assets.signify.com/is/image/PhilipsLighting/81c7565588fb437a93eaab3600c721bc?wid=494&hei=435&$pnglarge$",
		PRODUCT_PRICE: 50,
		PRODUCT_SELLER: "Company A",
		PRODUCT_STOCK: 50,
	},
	{
		PRODUCT_ID: "PRO-B-001",
		PRODUCT_NAME: "PRODUCT B 001",
		PRODUCT_DESCRIPTION: "THIS IS PRODUCT B 001",
		PRODUCT_IMGSRC: "https://www.sweeo.com/comm/upimage/p_160225_07386.jpg",
		PRODUCT_PRICE: 20,
		PRODUCT_SELLER: "Company B",
		PRODUCT_STOCK: 5,
	},
	{
		PRODUCT_ID: "PRO-B-002",
		PRODUCT_NAME: "PRODUCT B 002",
		PRODUCT_DESCRIPTION: "THIS IS PRODUCT B 002",
		PRODUCT_IMGSRC: "https://www.sweeo.com/comm/upimage/p_170103_03900.jpg",
		PRODUCT_PRICE: 40,
		PRODUCT_SELLER: "Company B",
		PRODUCT_STOCK: 0,
	},
	{
		PRODUCT_ID: "PRO-B-003",
		PRODUCT_NAME: "PRODUCT B 003",
		PRODUCT_DESCRIPTION: "THIS IS PRODUCT B 003",
		PRODUCT_IMGSRC: "https://www.sweeo.com/comm/upimage/p_170515_04925.jpg",
		PRODUCT_PRICE: 30,
		PRODUCT_SELLER: "Company B",
		PRODUCT_STOCK: 5,
	},
	{
		PRODUCT_ID: "PRO-B-004",
		PRODUCT_NAME: "PRODUCT B 004",
		PRODUCT_DESCRIPTION: "THIS IS PRODUCT B 004",
		PRODUCT_IMGSRC: "https://www.sweeo.com/comm/upimage/p_170905_06432.jpg",
		PRODUCT_PRICE: 60,
		PRODUCT_SELLER: "Company B",
		PRODUCT_STOCK: 1000,
	},
	{
		PRODUCT_ID: "PRO-B-005",
		PRODUCT_NAME: "PRODUCT B 005",
		PRODUCT_DESCRIPTION: "THIS IS PRODUCT B 005",
		PRODUCT_IMGSRC: "https://www.sweeo.com/comm/upimage/p_161012_02813.jpg",
		PRODUCT_PRICE: 10,
		PRODUCT_SELLER: "Company B",
		PRODUCT_STOCK: 200,
	},
	{
		PRODUCT_ID: "PRO-C-001",
		PRODUCT_NAME: "PRODUCT C 001",
		PRODUCT_DESCRIPTION: "THIS IS PRODUCT C 001",
		PRODUCT_IMGSRC: "https://source.unsplash.com/random",
		PRODUCT_PRICE: 250,
		PRODUCT_SELLER: "Company C",
		PRODUCT_STOCK: 120,
	},
	{
		PRODUCT_ID: "PRO-C-002",
		PRODUCT_NAME: "PRODUCT C 002",
		PRODUCT_DESCRIPTION: "THIS IS PRODUCT C 002",
		PRODUCT_IMGSRC: "https://source.unsplash.com/random",
		PRODUCT_PRICE: 100,
		PRODUCT_SELLER: "Company C",
		PRODUCT_STOCK: 150,
	},
	{
		PRODUCT_ID: "PRO-C-003",
		PRODUCT_NAME: "PRODUCT C 003",
		PRODUCT_DESCRIPTION: "THIS IS PRODUCT C 003",
		PRODUCT_IMGSRC: "https://source.unsplash.com/random",
		PRODUCT_PRICE: 120,
		PRODUCT_SELLER: "Company C",
		PRODUCT_STOCK: 210,
	},
	{
		PRODUCT_ID: "PRO-C-004",
		PRODUCT_NAME: "PRODUCT C 004",
		PRODUCT_DESCRIPTION: "THIS IS PRODUCT C 004",
		PRODUCT_IMGSRC: "https://source.unsplash.com/random",
		PRODUCT_PRICE: 70,
		PRODUCT_SELLER: "Company C",
		PRODUCT_STOCK: 410,
	},
	{
		PRODUCT_ID: "PRO-C-005",
		PRODUCT_NAME: "PRODUCT C 005",
		PRODUCT_DESCRIPTION: "THIS IS PRODUCT C 005",
		PRODUCT_IMGSRC: "https://source.unsplash.com/random",
		PRODUCT_PRICE: 5,
		PRODUCT_SELLER: "Company C",
		PRODUCT_STOCK: 110,
	},
	{
		PRODUCT_ID: "PRO-D-001",
		PRODUCT_NAME: "PRODUCT D 001",
		PRODUCT_DESCRIPTION: "THIS IS PRODUCT D 001",
		PRODUCT_IMGSRC: "https://source.unsplash.com/random",
		PRODUCT_PRICE: 30,
		PRODUCT_SELLER: "Company D",
		PRODUCT_STOCK: 105,
	},
	{
		PRODUCT_ID: "PRO-D-002",
		PRODUCT_NAME: "PRODUCT D 002",
		PRODUCT_DESCRIPTION: "THIS IS PRODUCT D 002",
		PRODUCT_IMGSRC: "https://source.unsplash.com/random",
		PRODUCT_PRICE: 90,
		PRODUCT_SELLER: "Company D",
		PRODUCT_STOCK: 123,
	},
	{
		PRODUCT_ID: "PRO-D-003",
		PRODUCT_NAME: "PRODUCT D 003",
		PRODUCT_DESCRIPTION: "THIS IS PRODUCT D 003",
		PRODUCT_IMGSRC: "https://source.unsplash.com/random",
		PRODUCT_PRICE: 70,
		PRODUCT_SELLER: "Company D",
		PRODUCT_STOCK: 321,
	},
	{
		PRODUCT_ID: "PRO-D-004",
		PRODUCT_NAME: "PRODUCT D 004",
		PRODUCT_DESCRIPTION: "THIS IS PRODUCT D 004",
		PRODUCT_IMGSRC: "https://source.unsplash.com/random",
		PRODUCT_PRICE: 60,
		PRODUCT_SELLER: "Company D",
		PRODUCT_STOCK: 17,
	},
	{
		PRODUCT_ID: "PRO-D-005",
		PRODUCT_NAME: "PRODUCT D 005",
		PRODUCT_DESCRIPTION: "THIS IS PRODUCT D 005",
		PRODUCT_IMGSRC: "https://source.unsplash.com/random",
		PRODUCT_PRICE: 100,
		PRODUCT_SELLER: "Company D",
		PRODUCT_STOCK: 5,
	},
	{
		PRODUCT_ID: "PRO-E-001",
		PRODUCT_NAME: "PRODUCT E 001",
		PRODUCT_DESCRIPTION: "THIS IS PRODUCT E 001",
		PRODUCT_IMGSRC: "https://source.unsplash.com/random",
		PRODUCT_PRICE: 55,
		PRODUCT_SELLER: "Company E",
		PRODUCT_STOCK: 9,
	},
	{
		PRODUCT_ID: "PRO-E-002",
		PRODUCT_NAME: "PRODUCT E 002",
		PRODUCT_DESCRIPTION: "THIS IS PRODUCT E 002",
		PRODUCT_IMGSRC: "https://source.unsplash.com/random",
		PRODUCT_PRICE: 99,
		PRODUCT_SELLER: "Company E",
		PRODUCT_STOCK: 25,
	},
	{
		PRODUCT_ID: "PRO-E-003",
		PRODUCT_NAME: "PRODUCT E 003",
		PRODUCT_DESCRIPTION: "THIS IS PRODUCT E 003",
		PRODUCT_IMGSRC: "https://source.unsplash.com/random",
		PRODUCT_PRICE: 299,
		PRODUCT_SELLER: "Company E",
		PRODUCT_STOCK: 6,
	},
];

module.exports = products;
