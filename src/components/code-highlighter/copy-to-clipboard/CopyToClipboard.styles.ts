import styled from 'styled-components';
import { CodeHighlighterTheme } from '../../../types/codeHighlighter';

export const StyledCopyToClipboard = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledCopyToClipboardIcon = styled.svg`
    cursor: pointer;
`;

type StyledCopyToClipboardTextProps = {
    codeTheme: CodeHighlighterTheme;
};
export const StyledCopyToClipboardText = styled.span<StyledCopyToClipboardTextProps>`
    color: ${({ codeTheme }: StyledCopyToClipboardTextProps) =>
        codeTheme === CodeHighlighterTheme.Dark ? '#e5e5e5' : '#999999'};
    font-size: small;
    font-family: sans-serif;
    margin-left: 4px;
    cursor: pointer;
`;
