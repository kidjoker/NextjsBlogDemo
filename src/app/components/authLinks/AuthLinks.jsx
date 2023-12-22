"use client"

import Link from 'next/link';
import styles from './authLinks.module.css';
import { useState } from 'react';

const AuthLinks = () => {
    const status = "notauthenticated"
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={styles.auth}>
                {status === "notauthenticated" ? (
                    <Link href="/login">Login</Link>
                ) : (
                    <>
                        <Link href="/write">Write</Link>
                        <span className={styles.link}>Logout</span>
                    </>
                )}
            </div>
            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {open && (
                <div className={styles.responsiveMenu}>
                    <Link href="/">Home</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/about">About</Link>
                    {status === "notauthenticated" ? (
                        <Link href="/login">Login</Link>
                    ) : (
                        <>
                            <Link href="/write">Write</Link>
                            <span className={styles.link}>Logout</span>
                        </>
                    )}
                </div>
            )}
        </>
    )
};

export default AuthLinks;