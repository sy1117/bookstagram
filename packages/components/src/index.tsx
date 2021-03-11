import * as React from "react"
import _Header from "./Header/Header"
import _Feed from "./Feed/Feed"
import _ImageUpload from "./ImageUpload/ImageUpload";
// import 'antd/dist/antd.css';

export const Button: React.FC = ({ children }) => {
  return <button>{children}</button>
}

export const Header = _Header;

export const Feed = _Feed;

export const ImageUpload = _ImageUpload;

export default {
  Header,
  Button,
  Feed,
  ImageUpload
}