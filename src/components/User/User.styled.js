import styled from 'styled-components';

// export const Text = styled.p`
// color: green;
// background-color: yellow;
// font-size: 16px;
// border: 1px solid tomato;

// &:hover {
//     background-color: palegreen;
// }
// `

// export const Span = styled.span`
// color: blue;

// ${Text}:hover & {
//     color: violet;
// }
// `

export const Span = styled.span`
  color: ${({ isRed }) => isRed ? 'red' : 'blue'};
  font-size: ${({ isRed }) => isRed ? '20px' : '16px'};
`;

export const Text = styled.p`
  color: ${(props)=> props.theme.colors.accent};
  background-color: yellow;
  font-size: 16px;
  border: 1px solid tomato;

  &:hover {
    background-color: palegreen;
  }

  &:hover ${Span} {
    color: violet;
  }
`;
