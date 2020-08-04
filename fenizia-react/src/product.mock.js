const productList = [
	{ 	
		id: 1, 
		product: {
				type: "book",
				title: 'Postales del Este', 
				author: 'Reyes Monforte', 
				price: 19.85, 
				rating: 9, 
				cover: "https://imagessl0.casadellibro.com/a/l/t1/90/9788401023590.jpg", 	description: 'Una emocionante historia basada en hechos reales sobre la memoria, el amor y la esperanza en medio del horror de Auschwitz.',
				properties: {
					newRelease: false,
					bestseller: true
				}
			} 
	},
	{ 
		id: 2, 
		product: {
			type: "book", 
			title: 'The Crazy Haacks', 
			author: 'Elisabet Benavent', 
			price: 17, 
			rating: 8.5, 
			cover: "https://imagessl8.casadellibro.com/a/l/t1/98/9788418038198.jpg",
			description: 'Una emocionante historia basada en hechos reales sobre la memoria, el amor y la esperanza en medio del horror de Auschwitz.'
		} 
	},
	{ 
		id: 3, 
		product: {
			type: "book", 
			title: 'El infinito en un junco', 
			author: 'Irene Vallejo', 
			price: 23.7, 
			rating: 7.5, 
			cover: "https://imagessl8.casadellibro.com/a/l/t1/38/9788466346238.jpg",
			description: 'Una emocionante historia basada en hechos reales sobre la memoria, el amor y la esperanza en medio del horror de Auschwitz.'
		}
	},
	{ 
		id: 4, 
		product: {
			type: "book", 
			title: 'El mensaje de Pandora', 
			author: 'Javier Serra', 
			price: 15.1, 
			rating: 5, 
			cover: "https://imagessl9.casadellibro.com/a/l/t1/49/9788466667449.jpg",
			description: 'Una emocionante historia basada en hechos reales sobre la memoria, el amor y la esperanza en medio del horror de Auschwitz.'
		}
	},
	{ 
		id: 5, 
		product: {
			type: "book", 
			title: 'El mentiroso', 
			author: 'Mikel Santiago', 
			price: 19.85, 
			rating: 8, 
			cover: "https://imagessl5.casadellibro.com/a/l/t1/65/9788484452065.jpg",
			description: 'Una emocionante historia basada en hechos reales sobre la memoria, el amor y la esperanza en medio del horror de Auschwitz.'
		}
	},
	{ 
		id: 6, 
		product: {
			type: "book", 
			title: 'Loba negra', 
			author: 'Juan Gómez-Jurado', 
			price: 19.85, 
			rating: 7.5, 
			cover: "https://imagessl7.casadellibro.com/a/l/t1/97/9788466666497.jpg",
			description: 'Una emocionante historia basada en hechos reales sobre la memoria, el amor y la esperanza en medio del horror de Auschwitz.'
		}
	},
	{ 
		id: 7, 
		product: {
			type: "book", 
			title: 'Reina roja', 
			author: 'Juan Gómez-Jurado', 
			price: 15, 
			rating: 6.5, 
			cover: "https://imagessl3.casadellibro.com/a/l/t1/23/9788499926223.jpg",
			description: 'Una emocionante historia basada en hechos reales sobre la memoria, el amor y la esperanza en medio del horror de Auschwitz.'
		}
	},
	{ 
		id: 8, 
		product: {
			type: "book", 
			title: 'Una noche muy larga', 
			author: 'Dov Alfon', 
			price: 19.95, 
			rating: 7.5, 
			cover: "https://imagessl2.casadellibro.com/a/l/t1/32/9788408232032.jpg",
			description: 'Una emocionante historia basada en hechos reales sobre la memoria, el amor y la esperanza en medio del horror de Auschwitz.'
		}
	},
	{ 
		id: 9, 
		product: {
			type: "book", 
			title: 'Una noche muy larga', 
			author: 'Dov Alfon', 
			price: 19.95, 
			rating: 7.5, 
			cover: "https://imagessl5.casadellibro.com/a/l/t1/95/9788467058895.jpg",
			description: 'Una emocionante historia basada en hechos reales sobre la memoria, el amor y la esperanza en medio del horror de Auschwitz.'
		}
	},
	{ 
		id: 10, 
		product: {
			type: "book", 
			title: 'Una noche muy larga', 
			author: 'Dov Alfon', 
			price: 19.95, 
			rating: 7.5, 
			cover: "https://imagessl8.casadellibro.com/a/l/t1/98/9788498381498.jpg",
			description: 'Una emocionante historia basada en hechos reales sobre la memoria, el amor y la esperanza en medio del horror de Auschwitz.'
		}
	},
	{ 
		id: 11, 
		product: {
			type: "book", 
			title: 'Una noche muy larga', 
			author: 'Dov Alfon', 
			price: 19.95, 
			rating: 7.5, 
			cover: "https://imagessl6.casadellibro.com/a/l/t1/26/9788425432026.jpg",
			description: 'Una emocionante historia basada en hechos reales sobre la memoria, el amor y la esperanza en medio del horror de Auschwitz.'
		}
	},
	{ 
		id: 12, 
		product: {
			type: "book", 
			title: 'Una noche muy larga', 
			author: 'Dov Alfon', 
			price: 19.95, 
			rating: 7.5, 
			cover: "https://imagessl2.casadellibro.com/a/l/t1/32/9788408232032.jpg",
			description: 'Una emocionante historia basada en hechos reales sobre la memoria, el amor y la esperanza en medio del horror de Auschwitz.'
		}
	},
	{ 
		id: 13, 
		product: {
			type: "book", 
			title: 'Una noche muy larga', 
			author: 'Dov Alfon', 
			price: 19.95, 
			rating: 7.5, 
			cover: "https://imagessl2.casadellibro.com/a/l/t1/32/9788408232032.jpg",
			description: 'Una emocionante historia basada en hechos reales sobre la memoria, el amor y la esperanza en medio del horror de Auschwitz.'
		}
	},
	{ 
		id: 14,
		product: {
			type: "book", 
			title: 'Una noche muy larga', 
			author: 'Dov Alfon', 
			price: 19.95, 
			rating: 7.5, 
			cover: "https://imagessl2.casadellibro.com/a/l/t1/32/9788408232032.jpg",
			description: 'Una emocionante historia basada en hechos reales sobre la memoria, el amor y la esperanza en medio del horror de Auschwitz.'
		}
	},
	{ 
		id: 15, 
		product: {
			type: "book", 
			title: 'Una noche muy larga', 
			author: 'Dov Alfon', 
			price: 19.95, 
			rating: 7.5, 
			cover: "https://imagessl2.casadellibro.com/a/l/t1/32/9788408232032.jpg",
			description: 'Una emocionante historia basada en hechos reales sobre la memoria, el amor y la esperanza en medio del horror de Auschwitz.'
		}
	}
];

export default productList