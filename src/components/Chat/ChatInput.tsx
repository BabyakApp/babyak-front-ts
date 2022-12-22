import * as React from "react";
import styles from "../../style/ChattingStyle.module.css";
import { ArrowLeft, User, LogOut } from "react-feather";

export function ChatInput() {
  return (
    <div className={styles.ChattingInput}>
      <div className={styles.ChattingExit}>
        <LogOut className={styles.ChattingExitIcon} />
      </div>
      <div className={styles.ChattingInputContainer}>
        <div className={styles.ChattingInputContainerInput}>
          <input type="text" />
        </div>
        <div className={styles.ChattingInputContainerButton}>전송</div>
      </div>
    </div>
  );
}
