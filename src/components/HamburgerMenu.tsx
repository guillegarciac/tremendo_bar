import { useState } from 'react';
import Link from 'next/link';
import styles from './HamburgerMenu.module.css';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.relative}>
            <button className={styles.hamburgerButton} onClick={toggleMenu}>
                {isOpen ? (
                    <span className={styles.closeIcon}>&times;</span> // X icon
                ) : (
                    <div className={styles.hamburgerIcon}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div> // Hamburger icon
                )}
            </button>
            {isOpen && (
                <div className={styles.menuOverlay}>
                    <ul className={styles.menuList}>
                        <li><Link href="/menu">Menu</Link></li>
                        <li><Link href="/contact">Book</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;
