'use client'

import styles from './Header.module.css';
import React, {useState, useEffect} from 'react';
export default function Header(){
    // utils/auth.js
    var isLoggedIn = function () {
        const token = localStorage.getItem('authToken');
        return token !== null;
    }

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        setLoggedIn(isLoggedIn());
    }, []);

    var handleLogout = function () {
        localStorage.removeItem('authToken');
    }

    return(
        <div className={styles.header_container}>
            <div className={styles.left_header}>
                <a className={styles.header_logo} href="/">
                </a>
            </div>
            <div className={styles.right_header}>
                <div className={`${styles.logout_btn} ${loggedIn ? styles.isLoggedIn : ""}`} >
                    <img className={styles.user_image} src='/images/icons/default-user-icon.png'></img>
                    <div style={{borderRight: "1px solid black"}}>
                        <p className={styles.username}>Nguyễn Văn A</p>
                    </div>
                    <a className={styles.header_btn} href='/Login' onClick={()=> handleLogout()}> 
                        <img className={styles.logo} src='/images/icons/room-type-icon.png'></img>
                        Đăng xuất
                    </a>
                </div>
                <a className={`${styles.header_btn} ${loggedIn ? styles.isLoggedIn : ""}`} href="/Login">
                    <img className={styles.logo} src='/images/layout/header/login-logo.jpg'></img>
                    Đăng nhập
                </a>
                <a className={`${styles.header_btn} ${loggedIn ? styles.isLoggedIn : ""}`} href="/Signup">
                    <img className={styles.logo} src='/images/layout/header/signup-logo.svg'></img>
                    Đăng ký
                </a>
            </div>
        </div>
    )
}