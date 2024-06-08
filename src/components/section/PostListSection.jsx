"use client"
import { useState, useRef, useEffect } from 'react';
import styles from './PostListSection.module.css'
import { fakeData } from '../../constant/fakeData'
import Link from 'next/link';

export default function PostListSection() {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;
    const maxPageButtons = 5;

    const filterPriceValues = [
        'Dưới 1 triệu đồng',
        'Từ 1 - 2 triệu đồng',
        'Từ 2 - 3 triệu đồng',
        'Từ 3 - 5 triệu đồng',
        'Từ 5 - 7 triệu đồng',
        'Từ 7 - 10 triệu đồng',
        'Từ 10 - 15 triệu đồng',
        'Trên 15 triệu đồng'
    ];

    const filterSizeValues = [
        'Dưới 20 mét vuông',
        'Từ 20 - 30 mét vuông',
        'Từ 30 - 40 mét vuông',
        'Từ 40 - 50 mét vuông',
        'Trên 50 mét vuông'
    ];

    const filterTypeValues = [
        'Loại 1',
        'Loại 2',
        'Loại 3',
        'Loại 4',
        'Loại 5'
    ];

    const filterValues = [filterPriceValues, filterSizeValues, filterTypeValues];
    const filterTitles = ["Giá", "Kích Thước", "Loại phòng"];

    // Calculate the indexes for the current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = fakeData.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(fakeData.length / postsPerPage);

    const getPageNumbers = () => {
        let startPage, endPage;
        if (totalPages <= maxPageButtons) {
            startPage = 1;
            endPage = totalPages;
        } else {
            const maxPagesBeforeCurrentPage = Math.floor(maxPageButtons / 2);
            const maxPagesAfterCurrentPage = Math.ceil(maxPageButtons / 2) - 1;
            if (currentPage <= maxPagesBeforeCurrentPage) {
                startPage = 1;
                endPage = maxPageButtons;
            } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
                startPage = totalPages - maxPageButtons + 1;
                endPage = totalPages;
            } else {
                startPage = currentPage - maxPagesBeforeCurrentPage;
                endPage = currentPage + maxPagesAfterCurrentPage;
            }
        }
        return Array.from({ length: (endPage - startPage + 1) }, (_, index) => startPage + index);
    };

    const pageNumbers = getPageNumbers();

    // Create a ref for the search result container
    const searchResultRef = useRef(null);

    // Function to handle page change
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        searchResultRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.container}>
            <div ref={searchResultRef} className={styles.post_list_container}>
                <div className={styles.search_result}>Tìm thấy {fakeData.length} kết quả</div>
                {currentPosts.map((value) => (
                    <div key={value.id} className={styles.post}>
                        <Link className={styles.post_image_container} href={`/Post/${value.id}`}>
                            <img className={styles.post_image} src="/images/post/default-room.jpg" alt="" />
                        </Link>
                        <div className={styles.post_details_container}>
                            <Link className={styles.post_title} href={`/Post/${value.id}`}>
                                {value.title}
                            </Link>
                            <div className={styles.post_address}>{value.address}</div>
                            <div className={styles.post_description}>{value.desciption}</div>
                            <div className={styles.post_contact_info}>
                                <img className={styles.user_image} src="/images/icons/default-user-icon.png" alt="" />
                                {value.contact.name}
                                <a className={styles.call_btn}> Gọi {value.contact.phoneNumber}</a>
                            </div>
                        </div>
                    </div>
                ))}
                <div className={styles.pagination}>
                    <button
                        className={styles.page_btn}
                        onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    {pageNumbers.map(number => (
                        <button
                            key={number}
                            className={`${styles.page_btn} ${currentPage === number ? styles.active : ''}`}
                            onClick={() => handlePageChange(number)}
                        >
                            {number}
                        </button>
                    ))}
                    <button
                        className={styles.page_btn}
                        onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
            <div className={styles.sublink_container}>
                {filterValues.map((value, index) => (
                    <div key={index} className={styles.quick_search_container}>
                        <div className={styles.quick_access_title}>Xem theo {filterTitles[index]}</div>
                        <div className={styles.quick_access_container}>
                            {value.map((val, idx) => <a key={idx} href='' className={styles.quick_access}>{val}</a>)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
