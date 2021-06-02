import { Layout } from "@bookstagram/components";
import { useRouter } from "next/router";
import { useOnCommentAddedSubscription } from "../apollo/__generated__/models";
import { addNotifications } from "../state/notifications";
import { userVar } from "../state/user";

const LayoutWrapper: React.FC = ({ children }) => {
  const user = userVar();
  const router = useRouter();

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
    switch (menu) {
      case "logout":
        router.push("/log-out");
        break;
      default:
        break;
    }
  };

  return (
    <Layout onMenuClick={onMenuClick} profileImageURL={user?.profileImageURL}>
      {children}
    </Layout>
  );
};

export default LayoutWrapper;
