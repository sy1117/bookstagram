import React, { FormEvent, FormEventHandler } from 'react'
import clsx from 'clsx';
import styles from "./LoginPage.module.scss"
import { LoginInput, LoginMutation } from '../_generated/models';
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/client';

const LoginPage = () => {

    const LOGIN = loader("../graphql/LOGIN.gql")

    const [login] = useMutation<LoginMutation, LoginInput>(LOGIN, {
        onCompleted({ login }) {
            if (login?.userName) {
                // isLoggedInVar(true)
            } else {
                alert("authentication failed")
            }
        }
    });

    const submitHandler: FormEventHandler = (e: FormEvent) => {
        e.preventDefault();
        const { target } = e;
        const formData = new FormData(target as HTMLFormElement);
        const userName = formData.get("userName") as string;
        const password = formData.get("password") as string;

        try {
            login({
                variables: {
                    userName,
                    password
                },
            })
        } catch (error) {
            console.log(error)

        }

    }

    return (
        <div className={styles.form_container}>
            <h1 className={clsx(styles.sprite_insta_big_logo, styles.title)}>
                Bookstagram
                </h1>
            <div className={styles.form} onSubmit={submitHandler}>
                <form action="#">
                    <p className={styles.login_user_name}>
                        <label htmlFor="user_name">사용자명:</label>
                        <input type="text" id="user_name" name="userName" />
                    </p>

                    <p className={styles.login_user_password}>
                        <label htmlFor="user_password">비밀번호:</label>
                        <input type="text" id="user_password" name="password" />
                    </p>
                    <input type="submit" id="submit_btn" value="로그인" className={styles.submit_btn} />
                </form>
            </div>
            <div className="bottom_box">
                <div>
                    <span>아이디가 없으신가요?</span><a href="#">회원가입</a>
                </div>
            </div>
        </div>

    )
}

export default LoginPage
