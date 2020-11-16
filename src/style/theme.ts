import { css, DefaultTheme } from 'styled-components';

const fontWeight = {
  regular: 400,
  medium: 500,
  bold: 'bold',
};

const theme: DefaultTheme = {
  colors: {
    text: '#1f1f1f',
  },
  font: {
    n36m: css`
      font-weight: ${fontWeight.medium};
      font-size: 36px;
      line-height: 48px;
    `,
    n26b: css`
      font-weight: ${fontWeight.bold};
      font-size: 26px;
      line-height: 38px;
    `,
    n20m: css`
      font-weight: ${fontWeight.medium};
      font-size: 20px;
      line-height: 32px;
    `,
    n18b: css`
      font-weight: ${fontWeight.bold};
      font-size: 18px;
      line-height: 26px;
    `,
    n16m: css`
      font-weight: ${fontWeight.medium};
      font-size: 16px;
      line-height: 24px;
    `,
    n16r: css`
      font-weight: ${fontWeight.regular};
      font-size: 16px;
      line-height: 24px;
    `,
    n14m: css`
      font-weight: ${fontWeight.medium};
      font-size: 14px;
      line-height: 20px;
    `,
    n14r: css`
      font-weight: ${fontWeight.regular};
      font-size: 14px;
      line-height: 20px;
    `,
    n12m: css`
      font-weight: ${fontWeight.medium};
      font-size: 12px;
      line-height: 20px;
    `,
  },
};

export default theme;
