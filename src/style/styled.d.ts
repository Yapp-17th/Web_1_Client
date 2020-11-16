import 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string;
      coolBlack: string;
      coolGrey: string;
      lightGrey: string;
      coolWhite: string;
      white: string;
      pastelYellow: string;
      pastelBlue: string;
      pastelRed: string;
      pastelGreen: string;
      pastelPurple: string;
      alert: string;
    };
    font: {
      n36m: FlattenSimpleInterpolation;
      n26b: FlattenSimpleInterpolation;
      n20m: FlattenSimpleInterpolation;
      n18b: FlattenSimpleInterpolation;
      n16m: FlattenSimpleInterpolation;
      n16r: FlattenSimpleInterpolation;
      n14m: FlattenSimpleInterpolation;
      n14r: FlattenSimpleInterpolation;
      n12m: FlattenSimpleInterpolation;
    };
  }
}
