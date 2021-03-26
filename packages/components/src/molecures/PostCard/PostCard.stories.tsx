// Button.stories.tsx

import React, { FormEvent, useState } from "react";

import { Meta } from "@storybook/react";

import { PostCard, PostCardProps } from "./PostCard";
import ActionIcons from "./ActionIcons";

export default {
  title: "Molecures/PostCard",
  component: PostCard,
} as Meta;

const content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vitae a natus vel officia dignissimos ipsam ratione iste quas quidem?`;

export const Normal = () => (
  <PostCard
    profileURL={
      "https://instagram.fjrs8-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fjrs8-1.fna.fbcdn.net&_nc_ohc=hLTkwc3uTqUAX_XtCE4&ccb=7-4&oh=8de804fc6efffe6b0a222043b06583dc&oe=6087738F&_nc_sid=cff2a4&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-4"
    }
    title={"userName"}
    subTitle={"booktitle"}
    imageURL={"http://image.yes24.com/goods/98137764/800x0"}
    content={content}
    actionIcons={<ActionIcons />}
    onComment={(event: FormEvent<HTMLFormElement>) => {
      const formdata = new FormData(event.currentTarget);
      alert(formdata.get("comment"));
      event.currentTarget.reset();
    }}
    // userId={"testuser"}
    likes={330}
    comments={22}
  ></PostCard>
);

export const LikedPost = () => {
  const [like, setlike] = useState(true);
  return (
    <PostCard
      content={content}
      profileURL={
        "https://instagram.fjrs8-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fjrs8-1.fna.fbcdn.net&_nc_ohc=hLTkwc3uTqUAX_XtCE4&ccb=7-4&oh=8de804fc6efffe6b0a222043b06583dc&oe=6087738F&_nc_sid=cff2a4&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-4"
      }
      subTitle={"booktitle"}
      imageURL={"http://image.yes24.com/goods/98137764/800x0"}
      title={"testuser"}
      // likes={330}
      // like={like}
      // onLike={() => setlike(!like)}
    ></PostCard>
  );
};
