"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useWishlist } from '@/context/WishlistContext';
import styles from '../styles/header.module.css';

const Header: React.FC = () => {
    const { wishlist } = useWishlist();
    const router = useRouter();
    const pathname = usePathname();
    const isLoginPage = pathname === '/login';

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        router.push('/login');
    };

    if (isLoginPage) {
        return null;
    }

    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerFixed}>
                <header className={styles.header}>
                    <div className={styles.linkContainer}>
                        <Link href="/" className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}>
                            <p className={styles.linkText}>Home</p>
                        </Link>
                        <Link href="/wishlist" className={`${styles.link} ${pathname === '/wishlist' ? styles.active : ''}`}>
                            <p className={styles.linkText}>Wishlist</p>
                            {wishlist.length > 0 && (
                                <span className={`${styles.badge} ${pathname === '/wishlist' ? styles.activeBadge : ''}`}>
                                    {wishlist.length}
                                </span>
                            )}
                        </Link>
                    </div>
                    <button className={styles.logoutButton} onClick={handleLogout}>
                        Logout
                    </button>
                </header>
            </div>
        </div>
    );
};

export default Header;
