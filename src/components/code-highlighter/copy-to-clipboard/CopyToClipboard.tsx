import React, { FC } from 'react';
import { CodeHighlighterTheme } from '../../../types/codeHighlighter';
import {
    StyledCopyToClipboard,
    StyledCopyToClipboardIcon,
    StyledCopyToClipboardText,
} from './CopyToClipboard.styles';

export type CopyToClipboardProps = {
    copyButtonText?: string;
    text: string;
    theme: CodeHighlighterTheme;
};

const CopyToClipboard: FC<CopyToClipboardProps> = ({ copyButtonText, text, theme }) => {
    const handleClick = () => {
        void navigator.clipboard.writeText(text);
    };

    return (
        <StyledCopyToClipboard onClick={handleClick}>
            <StyledCopyToClipboardIcon
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="14"
                viewBox="0 0 448 512"
            >
                <path
                    fill={theme === CodeHighlighterTheme.Dark ? '#e5e5e5' : '#999999'}
                    d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"
                />
            </StyledCopyToClipboardIcon>
            {copyButtonText && (
                <StyledCopyToClipboardText codeTheme={theme}>
                    {copyButtonText}
                </StyledCopyToClipboardText>
            )}
        </StyledCopyToClipboard>
    );
};

CopyToClipboard.displayName = 'CopyToClipboard';

export default CopyToClipboard;
