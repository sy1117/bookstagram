import React from 'react';
//@ts-ignore
import styles from './ImageUpload.module.scss';

const ImageUpload = () => {
    return (
        <div className={styles.image_upload}>
            <div className={styles.container}>

                <div className={styles.plus_icon}>+</div>
                <div className={styles.description}>
                    사진 파일을 끌어다 놓으세요
            </div>
            </div>
        </div>
    )
}

export default ImageUpload
