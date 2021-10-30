import Headings from "components/globalComponents/Headings";
import FormEmail from "../FormEmail";
import IconsContact from "../IconsContact";
import * as S from "./styles";

const MainContact = () => (
  <>
    <S.Wrapper id="contacts">
      <Headings
        msg="Contato"
        fontSizeText="2rem"
        marginText="0 0 0 3rem"
        aria-label="Titulo da seção"
      />
      <FormEmail />
    </S.Wrapper>
    <S.ContainerFooter>
      <IconsContact />
    </S.ContainerFooter>
  </>
);

export default MainContact;
