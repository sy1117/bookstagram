import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { logout } from "../apollo/auth";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("jwt");
    router.push("/log-in");
  }, []);

  logout();

  return <div>...logout</div>;
};

export default Logout;
