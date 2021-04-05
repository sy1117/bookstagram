import React, { FormEvent, FormEventHandler } from "react";
import clsx from "clsx";
import styles from "./login.module.scss";
import { isLoggedInVar } from "../apollo/auth";
import { useLoginMutation } from "../apollo/__generated__/models";
import { useRouter } from "next/router";
import { ApolloError } from "@apollo/client";
import { userVar } from "../apollo/user";

const LoginPage = () => {
  const router = useRouter();
  const [login] = useLoginMutation({
    onCompleted({ login: { token } }) {
      isLoggedInVar(true);
      localStorage.setItem("jwt", token);
    },
  });

  const submitHandler: FormEventHandler = async (e: FormEvent) => {
    e.preventDefault();
    const { target } = e;
    const formData = new FormData(target as HTMLFormElement);
    const userId = formData.get("userId") as string;
    const password = formData.get("password") as string;

    try {
      const { data } = await login({
        variables: {
          userId,
          password,
        },
      });
      if (data?.login.token) {
        localStorage.setItem("jwt", data?.login?.token);
      }
      router.push("/");
    } catch (error) {
      alert("일치하는 계정이 없습니다");
    }
  };

  return (
    <div className={styles.form_container}>
      <h1 className={clsx(styles.sprite_insta_big_logo, styles.title)}>
        {/* Bookstagram */}
        <img
          alt={"logo"}
          src={
            "https://readwithallison.files.wordpress.com/2020/07/bookstagram.png?w=656&h=300&crop=1"
          }
        />
      </h1>
      <div className={styles.form} onSubmit={submitHandler}>
        <form action="#">
          <p className={styles.login_user_name}>
            <input type="text" id="userId" name="userId" />
          </p>

          <p className={styles.login_user_password}>
            <input type="password" id="user_password" name="password" />
          </p>
          <input
            type="submit"
            id="submit_btn"
            value="로그인"
            className={styles.submit_btn}
          />
        </form>
      </div>
      <div className={styles.bottom_box}>
        <div>
          <span>아이디가 없으신가요?</span>
          <a href="#">회원가입</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
