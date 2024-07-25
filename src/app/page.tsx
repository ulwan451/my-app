"use client"

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import CharacterCard from '../components/CharacterCard';
import { fetchCharacters } from '../lib/api';
import { useWishlist } from '../context/WishlistContext';
import styles from '../styles/page.module.css';
import { Character } from '@/types/types';

const Home: React.FC = () => {
  const router = useRouter();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      router.push('/login');
    } else {
      const getData = async () => {
        try {
          const data: Character[] = await fetchCharacters();
          setCharacters(data);
        } catch (error) {
          setError('Failed to load data');
        } finally {
          setLoading(false);
        }
      };

      getData();
    }
  }, [router]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.characterList}>
        {characters.map((character) => (
          <CharacterCard
            key={character.name}
            name={character.name}
            birthYear={character.birth_year}
            gender={character.gender}
            onAddToWishlist={() => addToWishlist(character)}
            onRemoveFromWishlist={() => removeFromWishlist(character.name)}
            isWishlisted={isInWishlist(character.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
