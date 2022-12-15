import * as React from "react";
import styles from "../../style/ChattingStyle.module.css";
import { ArrowLeft, ArrowUp, User, LogOut } from "react-feather";
import { IChatMessage } from "pages/chatting";
import { format } from "date-fns";

interface IPostingInputProps {
  setItems: React.Dispatch<React.SetStateAction<IChatMessage[]>>;
}

export function PostingInput({ setItems }: IPostingInputProps) {
  const [value, setValue] = React.useState("");
  const handleChangeText = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    []
  );

  const handleClick = () => {
    setValue("");
    setItems((prev) => {
      return [
        ...prev,
        {
          type: "send",
          name: "붐바음악|음악학과21",
          text: value,
          time: format(new Date(), "HH'시' mm'분'"),
        },
      ];
    });
  };

  return (
    <div className={styles.ChattingInput}>
      <div className={styles.ChattingExit}>
        <LogOut className={styles.ChattingExitIcon} />
      </div>
      <div className={styles.ChattingInputContainer}>
        <div className={styles.ChattingInputContainerInput}>
          <input
            className={styles.ChattingInputBox}
            type="text"
            onChange={handleChangeText}
            value={value}
          />
        </div>
        <div className={styles.ChattingSendButton} onClick={handleClick}>
          <ArrowUp className={styles.ChattingSendIcon} />
        </div>
      </div>
    </div>
  );
}
