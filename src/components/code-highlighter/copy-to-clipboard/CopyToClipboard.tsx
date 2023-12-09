import React, { FC } from "react";
import { CodeHighlighterTheme } from "../../../types/codeHighlighter";
import {
  StyledCopyToClipboard,
  StyledCopyToClipboardIcon,
  StyledCopyToClipboardText,
} from "./CopyToClipboard.styles";

export type CopyToClipboardProps = {
  copyButtonText?: string;
  text: string;
  theme: CodeHighlighterTheme;
};

const CopyToClipboard: FC<CopyToClipboardProps> = ({
  copyButtonText,
  text,
  theme,
}) => {
  const handleClick = () => {
    void navigator.clipboard.writeText(text);
  };

  return (
    <StyledCopyToClipboard onClick={handleClick}>
      <StyledCopyToClipboardIcon
        // class="fa-light fa-clipboard"
        codeTheme={theme}
      />
      {copyButtonText && (
        <StyledCopyToClipboardText codeTheme={theme}>
          {copyButtonText}
        </StyledCopyToClipboardText>
      )}
    </StyledCopyToClipboard>
  );
};

CopyToClipboard.displayName = "CopyToClipboard";

export default CopyToClipboard;
