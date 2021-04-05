import { makeVar } from "@apollo/client";
import { User } from "./__generated__/models";

export const userVar = makeVar<User | null>(null);
