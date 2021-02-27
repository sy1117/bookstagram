import React from 'react'
import './App.css';
import { Button, Header, Feed } from "@bookstagram/components";
import { ApolloProvider, useMutation } from '@apollo/client';
import { client } from './apollo/config';
import { loader } from "graphql.macro";
import { LoginInput, LoginMutation } from './models';


const Test = () => {
  const LOGIN = loader("./graphql/login.gql")

  const [login] = useMutation<LoginMutation, LoginInput>(LOGIN, {
    variables: {
      userName: "1234",
      password: "1234"
    }
  })
  console.log(login());

  return <div>Test</div>

}

function App() {

  return (
    <ApolloProvider client={client}>
      <div>
        <Header></Header>
        <Button>test</Button>
        <Test />
        <div id="main_container">
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
        </div>
      </div >
    </ApolloProvider>
  );
}

export default App;
