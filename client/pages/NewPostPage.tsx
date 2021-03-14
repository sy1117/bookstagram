import React from 'react'
import { ImageUpload } from '@bookstagram/components';
import styles from './NewPostPage.module.scss'

const NewPostPage = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.image}>
                    <ImageUpload />
                </div>
                <div className={styles.padding}></div>
                <div className={styles.content}>
                    <h2>신규 독서 피드 작성</h2>
                    <input placeholder={"책 이름"} />
                    <textarea placeholder={"독서 후기"}></textarea>
                    <button>게시</button>
                </div>
            </div>
        </div>
    )
}

export default NewPostPage
