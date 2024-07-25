"use client"

import styles from '../../styles/wishlist.module.css';
import CharacterCard from '@/components/CharacterCard';
import { useWishlist } from '@/context/WishlistContext';
import { Character } from '@/types/types';

const Wishlist: React.FC = () => {
    const { wishlist, removeFromWishlist } = useWishlist();

    return (
        <div className={styles.container}>
            <div className={styles.characterList}>
                {wishlist.length > 0 ? (
                    wishlist.map((character: Character) => (
                        <CharacterCard
                            key={character.name}
                            name={character.name}
                            birthYear={character.birth_year}
                            gender={character.gender}
                            onRemoveFromWishlist={() => removeFromWishlist(character.name)}
                            isWishlisted={true}
                        />
                    ))
                ) : (
                    <p>No characters in wishlist.</p>
                )}
            </div>
        </div>
    );
};

export default Wishlist;
