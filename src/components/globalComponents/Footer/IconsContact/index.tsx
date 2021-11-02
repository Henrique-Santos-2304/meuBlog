import * as S from "./styles";
import { iconSocial } from "graphql/typesQueries/types";

type propsIconsSocials = {
  iconsContactSocial: iconSocial[];
};
const IconsContact = ({ iconsContactSocial }: propsIconsSocials) => (
  <>
    <S.Wrapper>
      {iconsContactSocial.map((icon) => (
        <S.Links href={icon.url} passHref key={icon.titleIcon}>
          <S.Anchor title={icon.titleIcon}>
            <S.ContentIcon>
              {icon.ariaLabel === "github" && <S.Github />}
              {icon.ariaLabel === "linkedin" && <S.Linkedin />}
              {icon.ariaLabel === "whatsapp" && <S.Whatsapp />}
            </S.ContentIcon>
          </S.Anchor>
        </S.Links>
      ))}
    </S.Wrapper>
  </>
);

export default IconsContact;
