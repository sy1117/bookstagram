import * as React from "react";
import _Header from "./organisms/Header/Header";
import _Feed from "./molecures/Feed/Feed";
import _ImageUpload from "./molecures/ImageUpload/ImageUpload";
import _Layout from "./layouts/Layout";
import _Popover from "./molecures/Popover/Popover";
import _Input from "./atoms/Input/Input";

export const Button: React.FC = ({ children }) => {
  return <button>{children}</button>;
};
export const Layout = _Layout;

export const Header = _Header;

export const Feed = _Feed;

export const ImageUpload = _ImageUpload;

export const Popover = _Popover;

export const Input = _Input;

export default {
  Header,
  Button,
  Feed,
  ImageUpload,
  Popover,
};
