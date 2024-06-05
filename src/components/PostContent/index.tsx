/* eslint-disable react/no-children-prop */
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { ArticleContentContainer } from './styles'
import { useTheme } from 'styled-components'
import { CSSProperties } from 'react'

interface ArticleContentProps {
  children: string
}

export function PostContent({ children }: ArticleContentProps) {
  const colors = useTheme()

  type SyntaxHighlighterStyle = {
    [key: string]: CSSProperties
  }

  const customStyle: SyntaxHighlighterStyle = {
    ...oneDark,
    'code[class*="language-"]': {
      ...oneDark['code[class*="language-"]'],
      backgroundColor: colors['base-post'],
      color: colors.markdownCodeText,
    },
    'pre[class*="language-"]': {
      ...oneDark['pre[class*="language-"]'],
      backgroundColor: colors['base-post'],
      color: colors.markdownCodeText,
    },
  }

  return (
    <ArticleContentContainer>
      <Markdown
        children={children}
        className="line-break"
        components={{
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')

            if (!match) {
              return <code className={className} {...props} />
            }

            return (
              <SyntaxHighlighter
                language={match[1]}
                PreTag="div"
                className="codeStyle"
                children={String(children).replace(/\s$/g, '')}
                style={customStyle}
                {...props}
              />
            )
          },
        }}
      />
    </ArticleContentContainer>
  )
}
