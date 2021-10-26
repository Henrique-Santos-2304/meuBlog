import * as S from "./styles";
type childrenProps = {
  children: React.ReactNode;
};
const SectionClipPathEffect = ({ children }: childrenProps) => (
  <S.CliPathContent>{children}</S.CliPathContent>
);

export default SectionClipPathEffect;
