import styled from "styled-components";
import { props } from ".";

export const CliPathContent = styled.div<props>`
  width: 100vw;
  padding: 7rem 1rem;
  background: white;
  margin-top: ${({ mt }) => (mt ? mt : 0)};
  margin-bottom: ${({ theme }) => theme.spacings.small};
  clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 90%);
`;
