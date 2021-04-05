import dynamic from "next/dynamic";

const Layout = dynamic(() =>
  import("@bookstagram/components").then((mod) => mod.Layout),
);

// export default Layout;

// import dynamic from "next/dynamic";
// import { Layout } from "@bookstagram/components";

import { Icons } from "@bookstagram/components";
import { useWhoAmIQuery } from "../apollo/__generated__/models";

const { IconHome, IconDirect, IconExplore, IconActivity } = Icons;

const LayoutWrapper: React.FC = ({ children }) => {
  const { loading, data } = useWhoAmIQuery();
  console.log(children, data);
  // return <span>tes</span>;

  const menus = [
    { path: "/", icon: <IconHome /> },
    { path: "/new-post", icon: <IconDirect /> },
    { path: "/friends", icon: <IconExplore /> },
    { path: "/notifications", icon: <IconActivity /> },
    {
      // path: "/profile",
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
