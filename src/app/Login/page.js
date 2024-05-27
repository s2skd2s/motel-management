'use client'

import styles from './Login.module.css';
import { useEffect, useState } from 'react';
export default function Login(){
    // Giả sử đây là hàm xử lý đăng nhập
    function handleLogin() {
        const token = 'token';
         // Token received from the server after successful login
        if (typeof window !== "undefined") {
          localStorage.setItem('authToken', token);
        }
    }

    return(
    <main className={styles.main}>
        <div className={styles.login_container}>
            <h1 className={styles.login_title}>Đăng nhập</h1>
            <form>
                <label className={styles.login_label}>SỐ ĐIỆN THOẠI</label>
                <input type='text' id='login_input' className={styles.login_input} required  ></input>
                <label className={styles.login_label}>MẬT KHẨU</label>
                <input type='password' className={styles.login_input} required ></input>
                <a className={styles.login_btn} onClick={() => handleLogin()} href='/'> 
                        Đăng nhập    
                </a>
            </form>
            <div className={styles.others_link_container}>
                <a href='/' className={styles.others_link}>Bạn quên mật khẩu?</a>
                <a href='/Signup' className={styles.others_link}>Tạo tài khoản mới</a>
            </div>
        </div>
    </main>
    )
}