'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './HamburgerMenu.module.css';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // Get the current pathname

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Determine the color of the hamburger icon based on the path
    const iconColorClass = pathname === '/' ? styles.whiteIcon : styles.blackIcon;

    // Determine which menu items to display based on the current page
    let menuItems;
    switch (pathname) {
        case '/menu':
            menuItems = [
                <li key="home"><Link href="/">Home</Link></li>,
                <li key="contact"><Link href="/contact">Book</Link></li>
            ];
            break;
        case '/contact':
            menuItems = [
                <li key="home"><Link href="/">Home</Link></li>,
                <li key="menu"><Link href="/menu">Menu</Link></li>
            ];
            break;
        default:
            menuItems = [
                <li key="menu"><Link href="/menu">Menu</Link></li>,
                <li key="contact"><Link href="/contact">Book</Link></li>
            ];
            break;
    }

    return (
        <div>
            {pathname !== '/' && (
                <div className={styles.stickyContainer}>
                    <div className={styles.relative}>
                        <button className={styles.hamburgerButton} onClick={toggleMenu}>
                            {isOpen ? (
                                <span className={`${styles.closeIcon} ${styles.whiteIcon}`}>&times;</span>
                            ) : (
                                <div className={`${styles.hamburgerIcon} ${iconColorClass}`}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            )}
                        </button>
                    </div>
                </div>
            )}
            {pathname === '/' && (
                <div className={styles.relative}>
                    <button className={styles.hamburgerButton} onClick={toggleMenu}>
                        {isOpen ? (
                            <span className={`${styles.closeIcon} ${styles.whiteIcon}`}>&times;</span>
                        ) : (
                            <div className={`${styles.hamburgerIcon} ${iconColorClass}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        )}
                    </button>
                </div>
            )}
            {isOpen && (
                <div className={styles.menuOverlay}>
                    <ul className={styles.menuList}>{menuItems}</ul>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;
