import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
    // Carica dal localStorage all'avvio
    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem("wishlist")
        return savedWishlist ? JSON.parse(savedWishlist) : []
    })

    // Salva nel localStorage ogni volta che la wishlist cambia
    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (product) => {
        setWishlist((prev) => {
            const exists = prev.find((item) => item.id === product.id)

            if (exists) return prev

            return [...prev, product]
        })
    }

    const removeFromWishlist = (id) => {
        setWishlist((prev) => {
            return prev.filter((item) => item.id !== id)
        })
    }

    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                addToWishlist,
                removeFromWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    )
}

export const useWishlist = () => useContext(WishlistContext)
