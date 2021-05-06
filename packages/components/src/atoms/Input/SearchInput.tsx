import React from "react";
import styles from "./Input.module.scss";
export interface SearchInputProps {}

const SearchInput: React.FC<SearchInputProps> = ({ ...props }) => (
  <div className={styles.search_box} {...props}>
    <input type="text" placeholder="검색" className={styles.search_field} />
    <div className={styles.fake_field}>
      <span className={styles.sprite_small_search_icon}></span>
      <span>검색</span>
    </div>
  </div>
);
export default SearchInput;
