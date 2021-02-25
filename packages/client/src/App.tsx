import React from 'react'
import './App.css';
import { Button, Header, Feed } from "@bookstagram/components";


console.log(Button, Header)
function App() {
  return (
    <div>
      <Header></Header>
      <Button>test</Button>
      <div id="main_container">
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
      </div>
    </div >
  );
}

export default App;
