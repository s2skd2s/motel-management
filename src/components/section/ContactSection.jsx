import styles from './ContactSection.module.css'
export default function ContactSection(){
    return(
        <div className={styles.ContactSection}>
            <div className={styles.contact_background}></div>
            
            <div className={styles.contact_title}>Liên hệ với chúng tôi khi bạn cần hỗ trợ:</div>

            <div className={styles.contact_info_container}>
                <div className={styles.contact_info}>
                    <span className={styles.contact_name}>Sầm Khánh Duy</span>
                    <p className={styles.contact_phone_number}>Điện thoại: 0123456789</p>
                    <p className={styles.contact_email}>Email: admin01@gmail.com </p>
                </div>
                <div className={styles.contact_info}>
                    <span className={styles.contact_name}>Võ Thành Công</span>
                    <p className={styles.contact_phone_number}>Điện thoại: 0123456789</p>
                    <p className={styles.contact_email}>Email: admin02@gmail.com </p>
                </div>
                <div className={styles.contact_info}>
                    <span className={styles.contact_name}>Nguyễn Thái Bảo</span>
                    <p className={styles.contact_phone_number}>Điện thoại: 0123456789</p>
                    <p className={styles.contact_email}>Email: admin03@gmail.com </p>
                </div>
            </div>
        </div>
    )
}