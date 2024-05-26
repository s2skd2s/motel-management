'use client';

import { useState } from 'react';
import styles from './Filterbar.module.css';

function Popup({ isOpen, category, values, tempSelectedIndex, onTempSelect, onClose, onApply }) {
    if (!isOpen) return null;

    return (
        <div className={styles.black_overlay} onClick={(e) => {
            if (e.target === e.currentTarget) {
                onClose(false);
            }
        }}>
            <div className={styles.popup_container}>
                <div className={styles.popup_header}>
                    {category === 'price' ? 'CHỌN GIÁ' : category === 'size' ? 'CHỌN KÍCH CỠ PHÒNG' : 'CHỌN LOẠI PHÒNG'}
                </div>
                <div className={styles.popup_content}>
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className={`${styles.filter_value} ${tempSelectedIndex === index ? styles.selected : ''}`}
                            onClick={() => onTempSelect(index, value)}
                        >
                            {value}
                        </div>
                    ))}
                </div>
                <div className={styles.popup_submit_btn} onClick={onApply}>
                    ÁP DỤNG
                </div>
                <div className={styles.popup_close_btn} onClick={() => onClose(false)}>
                    
                </div>
            </div>
        </div>
    );
}

export default function Filterbar() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [selectedValue, setSelectedValue] = useState({
        price: 'Giá phòng',
        size: 'Kích cỡ phòng',
        type: 'Loại phòng'
    });
    const [currentFilterCategory, setCurrentFilterCategory] = useState(null);

    const [tempSelectedIndex, setTempSelectedIndex] = useState(null);
    const [tempSelectedValue, setTempSelectedValue] = useState('');

    const togglePopup = (category = null) => {
        setIsPopupOpen(!isPopupOpen);
        setCurrentFilterCategory(category);
        if (category) {
            setTempSelectedIndex(selectedIndex);
            setTempSelectedValue(selectedValue[category]);
        }
    };

    const handleTempSelect = (index, value) => {
        setTempSelectedIndex(index);
        setTempSelectedValue(value);
    };

    const applyFilter = () => {
        setSelectedIndex(tempSelectedIndex);
        setSelectedValue(prevState => ({
            ...prevState,
            [currentFilterCategory]: tempSelectedValue
        }));
        togglePopup();
    };

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

    const filterValues = currentFilterCategory === 'price' ? filterPriceValues : currentFilterCategory === 'size' ? filterSizeValues : filterTypeValues;

    return (
        <>
            <div className={styles.filter_container}>
                <div className={styles.filter_category} onClick={() => togglePopup('price')}>
                    <img className='icon' src="/images/icons/icon-price-tag.png" alt="" />
                    <span className={styles.filter_content}>{selectedValue.price}</span>
                </div>

                <div className={styles.filter_category} onClick={() => togglePopup('size')}>
                    <img className='icon' src="/images/icons/room-size-icon.png" alt="" />
                    <span className={styles.filter_content}>{selectedValue.size}</span>
                </div>

                <div className={styles.filter_category} onClick={() => togglePopup('type')}>
                    <img className='icon' src="/images/icons/room-type-icon.png" alt="" />
                    <span className={styles.filter_content}>{selectedValue.type}</span>
                </div>
                <div className={styles.filter_submit_btn}>
                    <img className='icon' src="/images/icons/search-icon.png" alt="" />
                    <span className={styles.filter_content}>Tìm Kiếm</span>
                </div>
            </div>
            <Popup
                isOpen={isPopupOpen}
                category={currentFilterCategory}
                values={filterValues}
                tempSelectedIndex={tempSelectedIndex}
                onTempSelect={handleTempSelect}
                onClose={() => togglePopup()}
                onApply={applyFilter}
            />
        </>
    );
}
