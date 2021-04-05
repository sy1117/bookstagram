import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
//@ts-ignore
import styles from "./Modal.module.scss";
import CommentField from "../../molecures/CommentField/CommentField";

// export const useModal = (initialValue: boolean) => {
//   const [visible, setvisible] = useState<boolean>(false);

//   useEffect(() => {
//     let div = document.createElement("div");
//     div.id = "modal-container";
//     document.body.appendChild(div);

//     return () => {
//       document.body.removeChild(div);
//     };
//   }, [window]);

//   useEffect(() => {
//     console.log("he", Modal, document.getElementById("modal-container"));
//     return ReactDOM.createPortal(
//       <span>stes</span>,
//       document.getElementById("modal-container"),
//     );
//   }, [visible]);

//   return [
//     {
//       show: () => {
//         setvisible(true);
//       },
//       hide: () => {
//         setvisible(false);
//       },
//     },
//   ];
// };

const CloseButton = ({ onClick }) => (
  <div className={styles.close_btn} onClick={onClick}>
    <svg
      aria-label="닫기"
      fill="#ffffff"
      height="24"
      viewBox="0 0 48 48"
      width="24"
    >
      <path
        clip-rule="evenodd"
        d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </div>
);

const DialogHeader = () => (
  <header className="top">
    <div className={styles.user_container}>
      <div className={styles.profile_img}>
        <img src="imgs/thumb.jpeg" alt="" />
      </div>
      <div className={styles.user_name}>
        <div className={styles.nick_name}>hey</div>
        <div className={styles.country}>Seoul, South Korea</div>
      </div>
    </div>
    {/* <div className={styles.sprite_more_icon} data-name="more">
      <ul className={styles.more_detail}>
        <li>팔로우</li>
        <li>수정</li>
        <li>삭제</li>
      </ul>
    </div> */}
  </header>
);

const Comment = () => (
  <div className={styles.user_detail}>
    <div className={styles.user}>
      <img src="imgs/thumb02.jpg" alt="user" />
    </div>
    <div className={styles.comment}>
      <span className={styles.user_id}>in0.lee</span>너무귀엽네요
      ㅎㅎㅎ맞팔해요~!
      <div className={styles.time}>
        2시간
        {/* <span className="try_comment">답글 달기</span> */}
      </div>
      <div className={styles.icon_wrap}>
        <div className={styles.more_trigger}>
          <div className={styles.sprite_more_icon}></div>
        </div>
        <div>
          <div className={styles.sprite_small_heart_icon_outline}></div>
        </div>
      </div>
    </div>
  </div>
);

const Dialog: React.FC<{}> = () => (
  <div className={styles.dialog}>
    <div className={styles.dialog_container}>
      <div className={styles.image}>
        <img />
      </div>
      <div className={styles.content}>
        <DialogHeader />
        <div className={styles.scroll_section}>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment /> <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
        <div>{/* <CommentField /> */}</div>
      </div>
    </div>
  </div>
);

export interface ModalProps {
  visible?: boolean;
  onClose?: () => void;
}

// const Modal: React.FC<ModalProps> = ({ visible = true, onClose }) => {
//   useEffect(() => {
//     let div = document.createElement("div");
//     div.id = "modal-container";
//     document.body.appendChild(div);

//     return () => {
//       document.body.removeChild(div);
//     };
//   }, [document]);

//   const el = document && document.getElementById("modal-container");
//   return (
//     el &&
//     ReactDOM.createPortal(
//       <div className={styles.root} hidden={!visible}>
//         <div className={styles.container}>
//           <CloseButton onClick={onClose} />
//           <Dialog />
//         </div>
//       </div>,
//       document.getElementById("modal-container"),
//     )
//   );
// };

// export default Modal;
const Modal: React.FC<ModalProps> = ({ visible = false, onClose }) => {
  // useLockBodyScroll(ref.current);
  // useEffect(() => {
  //   if (document) {
  //     let div = document.createElement("div");
  //     div.id = "modal-container";
  //     document.body.appendChild(div);

  //     return () => {
  //       document.body.removeChild(div);
  //     };
  //   }
  // }, []);
  return (
    visible && (
      <div className={styles.root} hidden={!visible}>
        <div className={styles.container}>
          <CloseButton onClick={onClose} />
          <Dialog />
        </div>
      </div>
    )
  );
};

export default Modal;
