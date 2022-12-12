import * as React from "react";
import styles from "../../style/ChattingStyle.module.css";
import { ArrowLeft, User, LogOut } from "react-feather";

export function ChatHeader() {
  return (
    <div className={styles.ChattingHeader}>
      <div className={styles.ChattingHeaderBack}>
        <ArrowLeft className={styles.ChattingHeaderArrowLeft} />
      </div>
      <div className={styles.ChattingHeaderTitle}>신룽푸 마라탕 먹을 사람</div>
      <div className={styles.ChattingHeaderNumOfPeople}>
        <div>
          <User className={styles.ChattingHeaderNumOfPeopleIcon} />
        </div>
        <div>2/4</div>
      </div>
    </div>
  );
}
