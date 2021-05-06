import { makeVar } from "@apollo/client";
import { User } from "../__generated__/models";

interface Notification {
  user: Pick<User, "userId" | "profileImageURL">;
  createdAt: string;
  content: string;
  type: "COMMENT_ADDED";
}

export const notifications = makeVar<Array<Notification>>([]);

export const addNotifications = (newNoti: Notification) => {
  //   localStorage.getItem("jwt");
  notifications([...notifications(), newNoti]);
};
