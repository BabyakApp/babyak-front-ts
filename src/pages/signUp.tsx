import SignUpContainer from "components/SignUp/SignUpContainer";
import { SignUpHeader } from "components/SignUp/SignUpHeader";
import * as React from "react";

export default function SignUp() {
  return (
    <div>
      <SignUpHeader />
      <SignUpContainer />
    </div>
  );
}
