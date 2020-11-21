import { css } from 'styled-components';
import breakpoints from './breakpoints';

export default Object.keys(breakpoints).reduce(
    (accumulator, label) => {
        accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}px) {
        ${css(...args)};
      }
    `;
        return accumulator;
    },
    {}
);
