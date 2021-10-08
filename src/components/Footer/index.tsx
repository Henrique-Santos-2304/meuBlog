import * as S from "./styles";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const Footer = () => (
  <S.WrapperContent>
    <S.Wrapper>
      <S.WrapperSocials>
        {" "}
        <p>WebDeveloper</p>
      </S.WrapperSocials>
      <S.IconUp aria-label="Button Go to Top" href="#">
        <MdOutlineSubdirectoryArrowRight />
      </S.IconUp>
    </S.Wrapper>
  </S.WrapperContent>
);

export default Footer;
