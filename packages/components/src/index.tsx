import * as React from "react";
import _Header from "./organisms/Header/Header";
import _Feed from "./molecures/Feed/Feed";
import _ImageUpload from "./molecures/ImageUpload/ImageUpload";
import _Layout from "./layouts/Layout";

export const Button: React.FC = ({ children }) => {
  return <button>{children}</button>;
};
export const Layout = _Layout;

export const Header = _Header;

export const Feed = _Feed;

export const ImageUpload = _ImageUpload;

export default {
  Header,
  Button,
  Feed,
  ImageUpload,
};
