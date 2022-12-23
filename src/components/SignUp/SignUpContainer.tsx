import * as React from "react";
import styles from "../../style/SignUpStyle.module.css";
import Input from "@mui/material/Input";
import { Box } from "@mui/material";
import { DoubleComboBox } from "./DoubleComboBox";

const ariaLabel = { "aria-label": "description" };

export default function SignUpContainer() {
  return (
    <div className={styles.SignUpContainer}>
      <div className={styles.SignUpProp}>
        <div className={styles.SignUpPropTitle}>닉네임을 설정해주세요</div>
        <div className={styles.SignUpPropDetail}>2-5자로 입력해주세요.</div>
        <Input
          className={styles.SignUpPropInput}
          defaultValue=""
          inputProps={ariaLabel}
        />
      </div>
      <div className={styles.SignUpProp}>
        <div className={styles.SignUpPropTitle}>소속된 과를 선택해주세요</div>
        <DoubleComboBox />
      </div>
      <div className={styles.SignUpProp}>
        <div className={styles.SignUpPropTitle}>학번을 입력해주세요</div>
        <div className={styles.SignUpPropDetail}>앞 2자리를 입력해주세요.</div>
        <Input
          className={styles.SignUpPropInput}
          defaultValue=""
          inputProps={ariaLabel}
        />
      </div>
      <div className={styles.SignUpButtonWrapper}>
        <div className={styles.SignUpButton}>작성완료</div>
      </div>
    </div>
  );
}
