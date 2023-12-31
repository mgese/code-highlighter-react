import { format } from 'prettier/standalone';
import React, { FC, useCallback, useMemo } from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
    CodeHighlighterLanguage,
    CodeHighlighterTheme,
    HighlightedLines,
} from '../../types/codeHighlighter';
import { formatLanguage, getParserForLanguage } from '../../utils/codeHighlighter';
import {
    StyledCodeHighlighter,
    StyledCodeHighlighterFileName,
    StyledCodeHighlighterHeader,
} from './CodeHighlighter.styles';
import CopyToClipboard from './copy-to-clipboard/CopyToClipboard';

export type CodeHighlighterProps = {
    /**
     * The code that should be displayed.
     */
    code: string;
    /**
     * The text that should be displayed after the copy button.
     * If not set, just the button is displayed without text.
     */
    copyButtonText?: string;
    /**
     * The lines of code that should be highlighted.
     * Following lines can be highlighted: added, removed and just marked.
     */
    highlightedLines?: HighlightedLines;
    /**
     * The language of the displayed code.
     */
    language: CodeHighlighterLanguage;
    /**
     * Whether the code should be formatted with prettier.
     */
    shouldFormatCode?: boolean;
    /**
     * Whether the line numbers should be displayed.
     */
    shouldShowLineNumbers?: boolean;
    /**
     * The theme of the code block. Decide between dark and light.
     */
    theme?: CodeHighlighterTheme;
};

const CodeHighlighter: FC<CodeHighlighterProps> = ({
    theme = CodeHighlighterTheme.Dark,
    code,
    copyButtonText,
    language,
    highlightedLines,
    shouldFormatCode = false,
    shouldShowLineNumbers = false,
}) => {
    // function to style highlighted code
    const lineWrapper = useCallback(
        (lineNumber: number) => {
            let style = {
                backgroundColor: 'none',
                display: 'block',
                borderRadius: '2px',
            };

            if (!highlightedLines) {
                return { style };
            }

            if (highlightedLines.added && highlightedLines.added.includes(lineNumber)) {
                style = { ...style, backgroundColor: '#2EF29930' };
            } else if (highlightedLines.removed && highlightedLines.removed.includes(lineNumber)) {
                style = { ...style, backgroundColor: '#F22E5B30' };
            } else if (highlightedLines.marked && highlightedLines.marked.includes(lineNumber)) {
                style = { ...style, backgroundColor: '#cccccc40' };
            }

            return { style };
        },
        [highlightedLines],
    );

    const formattedCode = useMemo(() => {
        if (language) {
            const config = getParserForLanguage(language);

            if (shouldFormatCode && config) {
                return format(code, config) as unknown as string;
            }

            return code;
        }

        return code;
    }, [code, language, shouldFormatCode]);

    return useMemo(
        () => (
            <StyledCodeHighlighter codeTheme={theme}>
                <StyledCodeHighlighterHeader codeTheme={theme}>
                    <StyledCodeHighlighterFileName codeTheme={theme}>
                        {formatLanguage(language)}
                    </StyledCodeHighlighterFileName>
                    <CopyToClipboard text={code} theme={theme} copyButtonText={copyButtonText} />
                </StyledCodeHighlighterHeader>
                <SyntaxHighlighter
                    language={language ?? ''}
                    showLineNumbers={shouldShowLineNumbers}
                    style={theme === CodeHighlighterTheme.Dark ? oneDark : oneLight}
                    wrapLines
                    lineProps={lineWrapper}
                >
                    {formattedCode}
                </SyntaxHighlighter>
            </StyledCodeHighlighter>
        ),
        [theme, language, code, copyButtonText, shouldShowLineNumbers, lineWrapper, formattedCode],
    );
};

CodeHighlighter.displayName = 'CodeHighlighter';

export default CodeHighlighter;
