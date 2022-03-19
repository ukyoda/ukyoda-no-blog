import { styled } from 'linaria/react'

export const Markdown = styled.main`
  * + * {
    padding-top: 10px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    margin: 10px 0 5px;
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 22px;
  }

  h3 {
    font-size: 18px;
  }

  h4 {
    font-size: 14px;
  }

  h5 {
    font-size: 12px;
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  ol {
    list-style: decimal;
    margin: 10px 0;
  }

  ol > li {
    padding: 2px 0;
    margin-left: 2em;
  }

  ul {
    margin: 10px 0;
  }

  ul > li {
    position: relative;
    padding: 2px 0 2px 20px;
    margin-left: 12px;
  }

  ul > li::before {
    position: absolute;
    content: '・';
    left: 0;
    top: 2px;
  }

  p {
    margin: 10px 0;
  }

  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    max-width: 100%;
  }

  blockquote {
    border-left: 4px solid #ddd;
    margin: 10px 0;
    padding: 0 10px;
  }
`
