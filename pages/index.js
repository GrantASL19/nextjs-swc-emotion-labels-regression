import { css } from '@emotion/react'

import { Animated, Basic, bounce, Combined } from '../shared/styles'

const paragraph = css`
  color: orangered;
`;

const paragraphWithLabel = css`
  label: paragraphWithLabel;

  color: orangered;
`;

const Home = () => (
  <div>
    <Basic>Cool Styles</Basic>
    <Combined>
      With <code>:hover</code>.
    </Combined>
    <Animated animation={bounce}>Let's bounce.</Animated>

    <p css={paragraph}>Paragraph styled with css prop</p>
    <p css={paragraphWithLabel}>Paragraph styled with css prop including label declaration</p>
  </div>
)

export default Home
