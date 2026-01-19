import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
	// Stato codice sconto
	const [discountCode, setDiscountCode] = useState({});

	const [orderData, setOrderData] = useState({});

	// Carrello con localStorage
	const [cart, setCart] = useState(() => {
		const savedCart = localStorage.getItem("shopping-cart");
		return savedCart ? JSON.parse(savedCart) : [];
	});

	// Salva nel localStorage ogni volta che cambia il carrello
	useEffect(() => {
		localStorage.setItem("shopping-cart", JSON.stringify(cart));
	}, [cart]);

	// Aggiungi al carrello
	const addToCart = (product, quantity) => {
		setCart((prev) => {
			const existing = prev.find((item) => item.id === product.id);
			if (existing) {
				return prev.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + quantity }
						: item,
				);
			}
			return [...prev, { ...product, quantity }];
		});
	};

	// Rimuovi prodotto
	const removeFromCart = (id) => {
		setCart((prev) => prev.filter((item) => item.id !== id));
	};

	// Svuota carrello
	const clearCart = () => {
		setCart([]);
	};

	// Aggiorna quantità
	const updateQuantity = (id, delta) => {
		setCart((prev) =>
			prev.map((item) =>
				item.id === id
					? { ...item, quantity: Math.max(1, item.quantity + delta) }
					: item,
			),
		);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				clearCart,
				updateQuantity,
				discountCode,
				setDiscountCode,
				orderData,
				setOrderData,

			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	return useContext(CartContext);
}
