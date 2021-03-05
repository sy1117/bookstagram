import * as React from "react"
import _Header from "./Header/Header"
import _Feed from "./Feed/Feed"
// import 'antd/dist/antd.css';

export const Button: React.FC = ({ children }) => {
  return <button>{children}</button>
}

export const Header = _Header;

export const Feed = _Feed;

export default {
  Header,
  Button,
  Feed
}