import styles from './Login.module.css'
export default function Login(){
    return(
    <main className={styles.main}>
        <div className={styles.login_container}>
            <h1 className={styles.login_title}>Đăng nhập</h1>
            <form>
                <label className={styles.login_label}>SỐ ĐIỆN THOẠI</label>
                <input type='text' className={styles.login_input} required  ></input>
                <label className={styles.login_label}>MẬT KHẨU</label>
                <input type='password' className={styles.login_input} required ></input>
                <button className={styles.login_btn}>Đăng nhập</button>
            </form>
            <div className={styles.others_link_container}>
                <a href='/' className={styles.others_link}>Bạn quên mật khẩu?</a>
                <a href='/Signup' className={styles.others_link}>Tạo tài khoản mới</a>
            </div>
        </div>
    </main>
    )
}