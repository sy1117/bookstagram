import { makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar<boolean>(true);

export const login = () => {
  //   localStorage.getItem("jwt");
  isLoggedInVar(true);
};

export const logout = () => {
  //   localStorage.getItem("jwt");
  isLoggedInVar(false);
};
