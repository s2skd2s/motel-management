// app/post/[id]/page.js
import { fakeData } from '@/constant/fakeData';
import { notFound } from 'next/navigation';
import styles from './PostDetail.module.css';

export default function PostDetail({ params }) {
  const { id } = params;
  const post = fakeData[id];

  if (!post) {
    notFound();
  }

  return (
        <div className={styles.container}>
            <div className={styles.post_container}>
                    <div className={styles.post}>
                        <img className={styles.post_image} src="/images/post/default-room.jpg" alt="" />
                        <div className={styles.post_details_container}>
                            <div  className={styles.post_title}>
                                {post.title}
                            </div>
                            <div className={styles.post_address}>{post.address}</div>
                            <div className={styles.post_description}>
                                <h2>
                                    Thông Tin Mô Tả    
                                </h2> 
                                {post.desciption.split('.').map((value) => <p className={styles.post_line_description}> - {value}</p>)}
                            </div>
                        </div>                               
                    </div>
            </div>  
            <div className={styles.sublink_container}>
                    <div className={styles.post_contact_info}>
                                <img className={styles.user_image} src="/images/icons/default-user-icon.png" alt="" />
                                <p className={styles.user_name}>
                                    {post.contact.name}
                                </p> 
                                <a className={styles.call_btn}> <img className={styles.icon} src="/images/icons/phone-call-white.svg"></img>
                                    {post.contact.phoneNumber}
                                </a>
                                <a className={styles.call_btn}> <img className={styles.icon} src="/images/icons/icon-zalo.png"></img>
                                    Gọi Zalo 
                                </a>
                    </div>
            </div>
            
        </div>
  );
}
