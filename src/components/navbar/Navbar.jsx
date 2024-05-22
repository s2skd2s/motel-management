import styles from "./Navbar.module.css"

export default function Navbar(){
    return(
        <div className={styles.navbar_container}>
            <a className={styles.navbar_link}  href="">Trang chủ</a>
            <a className={styles.navbar_link}  href="">Cho thuê phòng trọ</a>
            <a className={styles.navbar_link}  href="">Nhà cho thuê</a>
            <a className={styles.navbar_link}  href="">Cho thuê căn hộ</a>
            <a className={styles.navbar_link}  href="">Mặt bằng, văn phòng</a>
            <a className={styles.navbar_link}  href="">Tìm người ở ghép</a>
            <a className={styles.navbar_link}  href="">Tin tức</a>
            <a className={styles.navbar_link}  href="">Bảng giá dịch vụ</a>
        </div>
    )
}