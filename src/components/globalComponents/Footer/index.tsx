import { footerIcon } from "graphql/typesQueries/types";
import IconsContact from "./IconsContact";
import * as S from "./styles";

type propsFooter = {
  dataFooter: footerIcon;
};
const Footer = ({ dataFooter }: propsFooter) => (
  <S.ContainerFooter aria-label={dataFooter.ariaLabel}>
    <IconsContact iconsContactSocial={dataFooter.iconsContactSocial} />
  </S.ContainerFooter>
);

export default Footer;
