import styled from 'styled-components';
import { CodeHighlighterTheme } from '../../types/codeHighlighter';

type StyledCodeHighlighterProps = {
    codeTheme: CodeHighlighterTheme;
};

export const StyledCodeHighlighter = styled.div<StyledCodeHighlighterProps>`
    margin: 4px 0;
    background-color: ${({ codeTheme }: StyledCodeHighlighterProps) =>
        codeTheme === CodeHighlighterTheme.Dark ? '#282c34' : '#fafafa'};
    border-radius: 8px;
    padding-bottom: 6px;

    pre {
        margin: 0 !important;
        overflow: auto;
        padding: 1em;
        line-height: 1.5;

        // Styles for custom scrollbar

        &::-webkit-scrollbar {
            height: 5px;
        }

        &::-webkit-scrollbar-track {
            background-color: transparent;
        }

        &::-webkit-scrollbar-button {
            background-color: transparent;
            height: 2px;
        }

        &::-webkit-scrollbar-thumb {

            background-color: rgba(${({ codeTheme }: StyledCodeHighlighterProps) =>
                codeTheme === CodeHighlighterTheme.Dark ? '229, 229, 229' : '153, 153, 153'},
            1);
            border-radius: 20px;
        }

        // Scrollbar styles for Firefox. The above styles are not supported in Firefox, these styles are
        // only supported in Firefox:

        * {
            scrollbar-color: rgba(${({ codeTheme }: StyledCodeHighlighterProps) =>
                codeTheme === CodeHighlighterTheme.Dark ? '229, 229, 229' : '153, 153, 153'},
            1);
        ) transparent;
            scrollbar-width: thin;
        }
    }
`;

type StyledCodeHighlighterHeaderProps = {
    codeTheme: CodeHighlighterTheme;
};

export const StyledCodeHighlighterHeader = styled.div<StyledCodeHighlighterHeaderProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid
        ${({ codeTheme }: StyledCodeHighlighterHeaderProps) =>
            codeTheme === CodeHighlighterTheme.Dark ? '#e5e5e5' : '#999999'};
    padding: 8px 12px;
`;

type StyledCodeHighlighterFileNameProps = {
    codeTheme: CodeHighlighterTheme;
};

export const StyledCodeHighlighterFileName = styled.span<StyledCodeHighlighterFileNameProps>`
    color: ${({ codeTheme }: StyledCodeHighlighterFileNameProps) =>
        codeTheme === CodeHighlighterTheme.Dark ? '#e5e5e5' : '#999999'};
    font-family: sans-serif;
    font-size: small;
`;
