import { makeVar } from "@apollo/client";
import { User } from "../apollo/__generated__/models";

export const userVar = makeVar<Pick<User, "userId" | "profileImageURL"> | null>(
  null,
);
