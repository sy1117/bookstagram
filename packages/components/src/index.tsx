import * as React from "react";
import _Header from "./organisms/Header/Header";
import _PostCard from "./molecures/PostCard/PostCard";
import _ImageUpload from "./molecures/ImageUpload/ImageUpload";
import _Layout from "./layouts/Layout";
import _Popover from "./molecures/Popover/Popover";
import _Input from "./atoms/Input/Input";
import _ActionIcons from "./molecures/PostCard/ActionIcons";
import _Modal from "./organisms/Modal/Modal";
// import "normalize.css";

export const Button: React.FC = ({ children }) => {
  return <button>{children}</button>;
};
export const Layout = _Layout;

export const Header = _Header;

export const PostCard = _PostCard;
export const ActionIcons = _ActionIcons;

export const ImageUpload = _ImageUpload;

export const Popover = _Popover;

export const Input = _Input;

export const Modal = _Modal;

export default {
  Header,
  Button,
  PostCard,
  ImageUpload,
  ActionIcons,
  Modal,
  Popover,
};
