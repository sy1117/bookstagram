import React, { FormEvent, FormEventHandler, useState } from "react";
import styles from "./new-post.module.scss";
import { ImageUpload, Popover, Input } from "@bookstagram/components";
import { useCreatePostMutation } from "../apollo/__generated__/models";

interface Props {}

const NewPost = (props: Props) => {
  const [modal, setModal] = useState<boolean>(false);
  const [createPost] = useCreatePostMutation();

  const submitHandler: FormEventHandler = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.stopPropagation();
    event.preventDefault();

    const formdata = new FormData(event.currentTarget);
    createPost({
      variables: {
        bookImageURL: formdata.get("bookImageURL") as string,
        bookName: formdata.get("bookName") as string,
        content: formdata.get("content") as string,
      },
    });
    return false;
  };
  return (
    <div className={styles.root}>
      <form onSubmit={submitHandler}>
        {/* {modal && (
          <Popover>
            <div style={{ height: "43px", display: "flex" }}>
              <div style={{ flex: "auto", padding: "1em" }}>이미지 URL</div>
              <div style={{ padding: "1em" }}>저장</div>
            </div>
            <div style={{ height: "43px" }}>
              <Input name={"bookImageUrl"} placeholder="url" />
            </div>
            <div style={{ height: "43px" }}></div>
          </Popover>
        )} */}
        <div className={styles.container}>
          {/* <div className={styles.image}>이미지 업로드</div> */}
          <div className={styles.content}>
            <h2>신규 독서 피드 작성</h2>
            <Input
              name={"bookImageURL"}
              placeholder="이미지url"
              required={true}
            />
            <input name="bookName" placeholder="책 이름" required={true} />
            <textarea name="content" placeholder="내용" required={true} />
            <button type="submit">게시</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
