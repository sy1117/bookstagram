import dynamic from "next/dynamic";

const Layout = dynamic(() =>
  import("@bookstagram/components").then((mod) => mod.Layout),
);

export default Layout;
