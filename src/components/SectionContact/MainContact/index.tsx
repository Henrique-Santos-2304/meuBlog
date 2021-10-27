import Headings from "components/globalComponents/Headings";
import FormEmail from "../FormEmail";
import * as S from "./styles";

const MainContact = () => (
  <S.Wrapper>
    <Headings
      msg="Contato"
      fontSizeText="2rem"
      marginText="0 0 1.4rem 2rem"
      aria-label="Titulo da seção"
    />
    <FormEmail />
  </S.Wrapper>
);

export default MainContact;
