import * as S from "./styles";

export type iconProps = {
  title: string;
  name: string;
};
const ICon = ({ name, title }: iconProps) => (
  <S.ContentLink>
    {name === "whatsapp" && <S.WhatsIcon id={name} title={title} />}
    {name === "linkedin" && <S.LinkedinIcon id={name} title={title} />}
    {name === "github" && <S.GithubIcon id={name} title={title} />}
  </S.ContentLink>
);

export default ICon;
