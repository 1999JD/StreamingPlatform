import { css } from '@emotion/react'
import theme from './theme'

const reset = css`
body {
  fontFamily: 'Noto Sans TC';
  color: ${theme.palette.black.main}
}  
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 0;
}
p {
  margin: 0;
}
a{
  text-decoration: none;
  color: inherit;
}
input {
  width: 100%
}
`

export default reset