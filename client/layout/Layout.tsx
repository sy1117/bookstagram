import { Icons, Layout } from "@bookstagram/components";
import { addNotifications, notifications } from "../state/notifications";
import {
  useOnCommentAddedSubscription,
  useWhoAmIQuery,
} from "../__generated__/models";

const { IconHome, IconDirect, IconExplore, IconActivity } = Icons;
console.log(IconExplore);

const Notifications = () => {
  const notis = notifications();
  return (
    <>
      <span>test</span>
      {notis.map(({ user }) => (
        <div>{user.userId}</div>
      ))}
    </>
  );
};

const LayoutWrapper: React.FC = ({ children }) => {
  const { loading, data } = useWhoAmIQuery();

  useOnCommentAddedSubscription({
    onSubscriptionComplete() {},
    onSubscriptionData({ subscriptionData: { data } }) {
      alert("내 포스트에 새로운 댓글이 추가되었습니다");
      if (data?.commentAdded) {
        addNotifications({
          user: {
            userId: data.commentAdded.user.userId,
            profileImageURL: data.commentAdded.user.profileImageURL,
          },
          content: data.commentAdded.content,
          createdAt: data.commentAdded.createdAt,
          type: "COMMENT_ADDED",
        });
      }
    },
  });
  const menus: Array<any> = [
    // { path: "/", icon: <IconHome /> },
    // { path: "/new-post", icon: <IconDirect /> },
    // { path: "/friends", icon: <IconExplore /> },
    // {
    //   path: "/notifications",
    //   icon: <IconActivity />,
    //   dropdownMenu: <Notifications />,
    // },
    {
      path: "/profile",
      icon: (
        <span>
          <img
            width={22}
            height={22}
            style={{ width: "22px", height: "22px", borderRadius: "50%" }}
            src={data?.whoAmI.profileImageURL}
          />
        </span>
      ),
      dropdownMenu: [{ path: "/log-out", name: "로그아웃" }],
    },
  ];

  return (
    <Layout menus={menus} profileImageURL={"estt"} logoutURL={"/testwew"}>
      {children}
    </Layout>
  );
};

export default LayoutWrapper;
