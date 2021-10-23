/* eslint-disable prettier/prettier */

import * as S from "./styles";

export interface sizesProps {
  asHeight: "small" | "medium" | "full";
}

interface childrenProps extends sizesProps {
  children: React.ReactNode;
}
const Container = ({ children, asHeight }: childrenProps) => (
  <S.FullContainer asHeight={asHeight}>
    <S.Container>{children}</S.Container>
  </S.FullContainer>
);

export default Container;
