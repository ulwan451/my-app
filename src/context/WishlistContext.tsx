'use client';

import { Character } from '@/types/types';
import React, { ReactNode, createContext, useContext, useEffect, useState, useCallback } from 'react';

interface WishlistContextProps {
    wishlist: Character[];
    addToWishlist: (character: Character) => void;
    removeFromWishlist: (name: string) => void;
    isInWishlist: (name: string) => boolean;
}

const WishlistContext = createContext<WishlistContextProps | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
    const [wishlist, setWishlist] = useState<Character[]>([]);

    useEffect(() => {
        const storedWishlist = localStorage.getItem('wishlist');
        if (storedWishlist) {
            setWishlist(JSON.parse(storedWishlist));
        }
    }, []);

    const addToWishlist = useCallback((character: Character) => {
        setWishlist((prevWishlist) => {
            const updatedWishlist = [...prevWishlist, character];
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            return updatedWishlist;
        });
    }, []);

    const removeFromWishlist = useCallback((name: string) => {
        setWishlist((prevWishlist) => {
            const updatedWishlist = prevWishlist.filter(character => character.name !== name);
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            return updatedWishlist;
        });
    }, []);

    const isInWishlist = useCallback((name: string): boolean => {
        return wishlist.some(character => character.name === name);
    }, [wishlist]);

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = (): WishlistContextProps => {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
};
