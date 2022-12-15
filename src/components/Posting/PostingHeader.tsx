import * as React from "react";
import styles from "../../style/PostingStyle.module.css";
import { ArrowLeft, User, LogOut } from "react-feather";

export function PostingHeader() {
  return (
    <div className={styles.PostingHeader}>
      <div className={styles.PostingHeaderBack}>
        <ArrowLeft className={styles.PostingHeaderArrowLeft} />
      </div>
      <div className={styles.PostingHeaderTitle}>밥약글 작성</div>
    </div>
  );
}
