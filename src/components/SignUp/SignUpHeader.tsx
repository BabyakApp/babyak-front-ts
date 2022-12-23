import * as React from "react";
import styles from "../../style/SignUpStyle.module.css";
import { ArrowLeft, User, LogOut } from "react-feather";

export function SignUpHeader() {
  return (
    <div className={styles.SignUpHeader}>
      <div className={styles.SignUpHeaderBack}>
        <ArrowLeft className={styles.SignUpHeaderArrowLeft} />
      </div>
      <div className={styles.SignUpHeaderTitle}>회원 가입</div>
    </div>
  );
}
