import PostingContainer from "components/Posting/PostingContainer";
import { PostingHeader } from "components/Posting/PostingHeader";
import * as React from "react";

export function Posting() {
  return (
    <div>
      <PostingHeader />
      <PostingContainer />
    </div>
  );
}

export default Posting;
