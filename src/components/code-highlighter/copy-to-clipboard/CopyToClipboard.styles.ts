import styled from 'styled-components';
import { CodeHighlighterTheme } from '../../../types/codeHighlighter';

export const StyledCopyToClipboard = styled.div`
    display: flex;
    align-items: center;
`;

type StyledCopyToClipboardIconProps = {
    codeTheme: CodeHighlighterTheme;
};

export const StyledCopyToClipboardIcon = styled.i<StyledCopyToClipboardIconProps>`
    color: ${({ codeTheme }: StyledCopyToClipboardIconProps) =>
        codeTheme === CodeHighlighterTheme.Dark ? '#e5e5e5' : '#999999'};
`;

type StyledCopyToClipboardTextProps = {
    codeTheme: CodeHighlighterTheme;
};
export const StyledCopyToClipboardText = styled.span<StyledCopyToClipboardTextProps>`
    color: ${({ codeTheme }: StyledCopyToClipboardIconProps) =>
        codeTheme === CodeHighlighterTheme.Dark ? '#e5e5e5' : '#999999'};
    font-size: small;
    margin-left: 4px;
`;
