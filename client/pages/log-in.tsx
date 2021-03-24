import React, { FormEvent, FormEventHandler } from "react";
import clsx from "clsx";
import styles from "./login.module.scss";
import { isLoggedInVar } from "../apollo/auth";
import { useLoginMutation } from "../apollo/__generated__/models";

const LoginPage = () => {
  const [login] = useLoginMutation({
    onCompleted({ login: { token } }) {
      isLoggedInVar(true);
      localStorage.setItem("jwt", token);
    },
  });

  const submitHandler: FormEventHandler = (e: FormEvent) => {
    e.preventDefault();
    const { target } = e;
    const formData = new FormData(target as HTMLFormElement);
    const userId = formData.get("userId") as string;
    const password = formData.get("password") as string;

    try {
      login({
        variables: {
          userId,
          password,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.form_container}>
      <h1 className={clsx(styles.sprite_insta_big_logo, styles.title)}>
        Bookstagram
      </h1>
      <div className={styles.form} onSubmit={submitHandler}>
        <form action="#">
          <p className={styles.login_user_name}>
            <input type="text" id="userId" name="userId" />
          </p>

          <p className={styles.login_user_password}>
            <input type="text" id="user_password" name="password" />
          </p>
          <input
            type="submit"
            id="submit_btn"
            value="로그인"
            className={styles.submit_btn}
          />
        </form>
      </div>
      <div className="bottom_box">
        <div>
          <span>아이디가 없으신가요?</span>
          <a href="#">회원가입</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
