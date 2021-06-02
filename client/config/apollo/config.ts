import {
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache,
  Operation,
  split,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { isLoggedInVar } from "../../state/auth";
import { WebSocketLink } from "@apollo/client/link/ws";
import {
  getMainDefinition,
  offsetLimitPagination,
} from "@apollo/client/utilities";

const getToken = () => {
  const token = localStorage.getItem("jwt");
  if (token) {
    return token;
  } else {
    return "";
  }
};

const authMiddleware = new ApolloLink((operation: Operation, forward: any) => {
  operation.setContext({
    headers: {
      "X-JWT": getToken(),
    },
  });
  return forward(operation);
});

// Log any GraphQL errors or network error that occurred
const errorLink = onError(
  ({ graphQLErrors, networkError, forward, operation, response }) => {
    if (networkError) alert("네트워크 에러가 발생하였습니다");
    // console.log(graphQLErrors && graphQLErrors[0]?.extensions?.exception.status)
    if (graphQLErrors) {
      const status = graphQLErrors[0]?.extensions?.exception.status;

      if (status === 401) {
        window.location.pathname = "/log-in";
      }
      if (status === 403) {
        isLoggedInVar(false);
        forward(operation);
      }

      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
    }
    if (networkError) console.log(`[Network error]: ${networkError}`);
  },
);

const wsLink = process.browser
  ? new WebSocketLink({
      uri: "ws://localhost:3001/graphql",
      options: {
        reconnect: true,
        connectionParams: {
          "X-JWT": getToken(),
        },
      },
    })
  : null;

const httpLink = new HttpLink({
  uri: "http://localhost:3001/graphql",
});

const httpLinks = from([errorLink, authMiddleware, httpLink]);

const splitLink = wsLink
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      from([authMiddleware, wsLink]),
      httpLinks,
    )
  : httpLinks;

export const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          posts: {
            ...offsetLimitPagination(),
            merge(existing = [], incoming: any[]) {
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  }),
  ssrMode: true,
  link: splitLink,
});
