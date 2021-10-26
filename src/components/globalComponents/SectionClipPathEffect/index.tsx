import * as S from "./styles";
export interface props {
  mt?: string;
}
interface childrenProps extends props {
  children: React.ReactNode;
}
const SectionClipPathEffect = ({ children, mt }: childrenProps) => (
  <S.CliPathContent mt={mt} data-testid="containerEffectClipPath">
    {children}
  </S.CliPathContent>
);

export default SectionClipPathEffect;
