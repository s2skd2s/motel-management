import styles from './PostListSection.module.css'
export default function PostListSection(){

    const fakeData = [
        {
            "title": "Chính Chủ Cho Thuê Phòng - Đường Nguyễn Xí, Quận Bình Thạnh",
            "address":"250/1 Phố Nguyễn Xí, Phường 13, Quận Bình Thạnh, Hồ Chí Minh",
            "desciption":"Nhà trệt. Vị trí: Ngay sau nhà mặt tiền đường Nguyễn Xí, hẻm xe hơi, có camera an ninh, không ngập. Gần chợ, trường học, Vinmart, Coop Food, FamilyMart, Điện máy Nguyễn Kim. Cách Q1 và Sân bay 10 phút đi xe máy, giao thông thuận tiện",
            "contact": {
                "name": "Nguyen Van Hang",
                "phoneNumber": "0123456789"
            }

        }, 
        {
            "title": "Chính Chủ Cho Thuê Phòng - Đường Nguyễn Xí, Quận Bình Thạnh",
            "address":"250/1 Phố Nguyễn Xí, Phường 13, Quận Bình Thạnh, Hồ Chí Minh",
            "desciption":"Nhà trệt. Vị trí: Ngay sau nhà mặt tiền đường Nguyễn Xí, hẻm xe hơi, có camera an ninh, không ngập. Gần chợ, trường học, Vinmart, Coop Food, FamilyMart, Điện máy Nguyễn Kim. Cách Q1 và Sân bay 10 phút đi xe máy, giao thông thuận tiện",
            "contact": {
                "name": "Nguyen Van Hang",
                "phoneNumber": "0123456789"
            }

        }, 
        {
            "title": "Chính Chủ Cho Thuê Phòng - Đường Nguyễn Xí, Quận Bình Thạnh",
            "address":"250/1 Phố Nguyễn Xí, Phường 13, Quận Bình Thạnh, Hồ Chí Minh",
            "desciption":"Nhà trệt. Vị trí: Ngay sau nhà mặt tiền đường Nguyễn Xí, hẻm xe hơi, có camera an ninh, không ngập. Gần chợ, trường học, Vinmart, Coop Food, FamilyMart, Điện máy Nguyễn Kim. Cách Q1 và Sân bay 10 phút đi xe máy, giao thông thuận tiện",
            "contact": {
                "name": "Nguyen Van Hang",
                "phoneNumber": "0123456789"
            }

        }, 
        {
            "title": "Chính Chủ Cho Thuê Phòng - Đường Nguyễn Xí, Quận Bình Thạnh",
            "address":"250/1 Phố Nguyễn Xí, Phường 13, Quận Bình Thạnh, Hồ Chí Minh",
            "desciption":"Nhà trệt. Vị trí: Ngay sau nhà mặt tiền đường Nguyễn Xí, hẻm xe hơi, có camera an ninh, không ngập. Gần chợ, trường học, Vinmart, Coop Food, FamilyMart, Điện máy Nguyễn Kim. Cách Q1 và Sân bay 10 phút đi xe máy, giao thông thuận tiện",
            "contact": {
                "name": "Nguyen Van Hang",
                "phoneNumber": "0123456789"
            }

        }, 
        {
            "title": "Chính Chủ Cho Thuê Phòng - Đường Nguyễn Xí, Quận Bình Thạnh",
            "address":"250/1 Phố Nguyễn Xí, Phường 13, Quận Bình Thạnh, Hồ Chí Minh",
            "desciption":"Nhà trệt. Vị trí: Ngay sau nhà mặt tiền đường Nguyễn Xí, hẻm xe hơi, có camera an ninh, không ngập. Gần chợ, trường học, Vinmart, Coop Food, FamilyMart, Điện máy Nguyễn Kim. Cách Q1 và Sân bay 10 phút đi xe máy, giao thông thuận tiện",
            "contact": {
                "name": "Nguyen Van Hang",
                "phoneNumber": "0123456789"
            }

        }, 
        {
            "title": "Chính Chủ Cho Thuê Phòng - Đường Nguyễn Xí, Quận Bình Thạnh",
            "address":"250/1 Phố Nguyễn Xí, Phường 13, Quận Bình Thạnh, Hồ Chí Minh",
            "desciption":"Nhà trệt. Vị trí: Ngay sau nhà mặt tiền đường Nguyễn Xí, hẻm xe hơi, có camera an ninh, không ngập. Gần chợ, trường học, Vinmart, Coop Food, FamilyMart, Điện máy Nguyễn Kim. Cách Q1 và Sân bay 10 phút đi xe máy, giao thông thuận tiện",
            "contact": {
                "name": "Nguyen Van Hang",
                "phoneNumber": "0123456789"
            }

        }
    ];

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


    const filterValues = [filterPriceValues, filterSizeValues, filterTypeValues]
    const filterTitles = ["Giá", "Kích Thước", "Loại phòng"]

    return(
        <div className={styles.container}>
            <div className={styles.post_list_container}>
                <div className={styles.search_result}>   Tìm thấy {fakeData.length} kết quả</div>
                {fakeData.map((value) => <div className={styles.post}>
                                            <div className={styles.post_image_container}></div>
                                            <div className={styles.post_details_container}>
                                                <div className={styles.post_title}>{value.title}</div>
                                                <div className={styles.post_address}>{value.address}</div>
                                                <div className={styles.post_description}>{value.desciption}</div>
                                                <div className={styles.post_contact_info}>
                                                    <img className={styles.user_image} src="/images/icons/default-user-icon.png" alt="" />
                                                    {value.contact.name}
                                                    <a className={styles.call_btn}> Gọi {value.contact.phoneNumber}</a>
                                                </div>
                                            </div>
                                        </div>)}
            </div>  
            <div className={styles.sublink_container}>
                {filterValues.map((value,index) => <div className={styles.quick_search_container}>
                                                        <div className={styles.quick_access_title}>Xem theo {filterTitles[index]}</div>
                                                        <div className={styles.quick_access_container}>
                                                            {value.map((value) => <a href='' className={styles.quick_access}>{value}</a>)}
                                                        </div>    
                                                    </div>)}
            </div>
        </div>
    )
}