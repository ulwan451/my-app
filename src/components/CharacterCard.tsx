import styles from '../styles/characterCard.module.css';

type CharacterCardProps = {
  name: string;
  birthYear: string;
  gender: string;
  onAddToWishlist?: () => void;
  onRemoveFromWishlist?: () => void;
  isWishlisted?: boolean;
};

const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  birthYear,
  gender,
  onAddToWishlist,
  onRemoveFromWishlist,
  isWishlisted
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.details}>
        <h3>{name}</h3>
        <p>Birth Year: {birthYear}</p>
        <p>Gender: {gender}</p>
      </div>
      {isWishlisted ? (
        <button className={styles.removeButton} onClick={onRemoveFromWishlist}>
          Remove
        </button>
      ) : (
        <button onClick={onAddToWishlist}>
          Add to Wishlist
        </button>
      )}
    </div>
  );
};

export default CharacterCard;
