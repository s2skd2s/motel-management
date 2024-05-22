import styles from "./Footer.module.css"
export default function Footer(){
    return(
    <>
        <div className={styles.footer_container}>
            <div className={styles.footer_info_bold}>Dự án Motel Management</div>
            <div className={styles.footer_info_bold}>Quy mô nhóm thực hiện: 3 người</div>
            <div className={styles.footer_info}>Front-end: Sầm Khánh Duy</div>
            <div className={styles.footer_info}>Back-end: Võ Thành Công</div>
            <div className={styles.footer_info}>Support FE & BE: Nguyễn Thái Bảo</div>
            <div className={styles.endline}></div>
        </div>
       
    </>    
    )
}