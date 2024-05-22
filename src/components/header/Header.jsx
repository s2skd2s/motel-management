import styles from './Header.module.css';
export default function Header(){
    return(
        <div className={styles.header_container}>
            <div className={styles.left_header}>
                <a className={styles.header_logo} href="/">
                </a>
            </div>
            <div className={styles.right_header}>
                <a className={styles.header_btn} href="/Login">
                    <img className={styles.logo} src='/images/layout/header/login-logo.jpg'></img>
                    Đăng nhập
                </a>
                <a className={styles.header_btn} href="/Signup">
                    <img className={styles.logo} src='/images/layout/header/signup-logo.svg'></img>
                    Đăng ký
                </a>
            </div>
        </div>
    )
}