import { Icons, Layout, MenuType } from "@bookstagram/components";
import {
  useWhoAmIQuery,
  useOnCommentAddedSubscription,
} from "../apollo/__generated__/models";
import { logout } from "../state/auth";
import { addNotifications } from "../state/notifications";

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

  const onMenuClick = (menu: any) => {
    alert(menu);
    switch (menu) {
      case "logout":
        logout();
        break;
      default:
        break;
    }
  };

  return (
    <Layout
      onMenuClick={onMenuClick}
      profileImageURL={"estt"}
      logoutURL={"/testwew"}
    >
      {children}
    </Layout>
  );
};

export default LayoutWrapper;
