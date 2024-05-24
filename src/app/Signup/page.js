import styles from './Signup.module.css'
export default function Signup(){
    return(
    <main className={styles.main}>
        <div className={styles.signup_container}>
            <h1 className={styles.signup_title}>Tạo tài khoản mới</h1>
            <form>
                <label className={styles.signup_label}>SỐ ĐIỆN THOẠI</label>
                <input type='text' className={styles.signup_input} required  ></input>
                <label className={styles.signup_label}>TÊN</label>
                <input type='text' className={styles.signup_input} required  ></input>
                <label className={styles.signup_label}>HỌ VÀ TÊN ĐỆM</label>
                <input type='text' className={styles.signup_input} required  ></input>
                <label className={styles.signup_label}>EMAIL</label>
                <input type='email' className={styles.signup_input} required  ></input>
                <label className={styles.signup_label}>MẬT KHẨU</label>
                <input type='password' className={styles.signup_input} required ></input>
                <label className={styles.signup_label}>GIỚI TÍNH</label>
                <div className={styles.get_gender_container}>
                    <label className={styles.gender_label} for='Male'>
                        <input type='radio' name='gender' id='Male' value='Male'></input>
                        Nam
                    </label>
                    <label className={styles.gender_label} for='Female'>
                        <input type='radio' name='gender' id='Female' value='Female'></input>
                        Nữ
                    </label>
                </div>
                <button className={styles.signup_btn}>Tạo tài khoản</button>
            </form>
            <div className={styles.others_link_container}>
                <p>
                    Bạn đã có tài khoản?
                    <a href='/Login' className={styles.others_link}>Đăng nhập ngay</a>
                </p>   
            </div>
        </div>
    </main>
    )
}