import * as React from "react";
import styles from "../../style/PostingStyle.module.css";
import Input from "@mui/material/Input";
import { Box } from "@mui/material";
import LocationComboBox from "./LocationComboBox";
import TimeComboBox from "./TimeComboBox";
import FoodComboBox from "./FoodComboBox";
import PeopleComboBox from "./PeopleComboBox";

const ariaLabel = { "aria-label": "description" };

export default function PostingContainer() {
  return (
    <div className={styles.PostingContainer}>
      <div className={styles.PostingProp}>
        <div className={styles.PostingPropTitle}>제목</div>
        <span className={styles.PostingPropDetail}>
          밥약글 제목을 작성해주세요. (최대 12자 가능)
        </span>
        <Input
          className={styles.PostingPropInput}
          defaultValue=""
          inputProps={ariaLabel}
        />
      </div>
      <div className={styles.PostingProp}>
        <div className={styles.PostingPropTitle}>만남 시간</div>
        <span className={styles.PostingPropDetail}>
          밥약을 희망하는 시간대를 입력해주세요.
        </span>
        <TimeComboBox />
      </div>
      <div className={styles.PostingProp}>
        <div className={styles.PostingPropTitle}>만남 장소</div>
        <span className={styles.PostingPropDetail}>
          약속장소로 만나는 위치를 입력해주세요.
        </span>
        <LocationComboBox />
      </div>
      <div className={styles.PostingProp}>
        <div className={styles.PostingPropTitle}>인원수</div>
        <span className={styles.PostingPropDetail}>
          밥약을 함께 하고 싶은 인원수를 입력해주세요.
        </span>
        <PeopleComboBox />
      </div>
      <div className={styles.PostingProp}>
        <div className={styles.PostingPropTitle}>선호하는 음식</div>
        <span className={styles.PostingPropDetail}>
          함께 먹고 싶은 음식 종류를 입력해주세요.
        </span>
        <FoodComboBox />
      </div>
      <div className={styles.PostingProp}>
        <div className={styles.PostingPropTitle}>소개</div>
        <span className={styles.PostingPropDetail}>
          밥약글을 소개하는 내용을 작성해주세요. (최대 200자 가능)
        </span>
        <Input
          className={styles.PostingPropInput}
          defaultValue=""
          inputProps={ariaLabel}
        />
      </div>
      <div className={styles.PostingButtonWrapper}>
        <div className={styles.PostingButton}>작성완료</div>
      </div>
    </div>
  );
}
