import Headings from "components/globalComponents/Headings";
import { contact, formDatas } from "graphql/typesQueries/types";
import FormEmail from "../FormEmail";
import * as S from "./styles";

type propsContact = {
  dataContact: contact;
  formEmailData: formDatas;
};

const MainContact = ({ dataContact, formEmailData }: propsContact) => (
  <>
    <S.Wrapper id="contacts">
      <Headings
        msg={dataContact.title}
        fontSizeText="2rem"
        marginText="0 0 0 3rem"
        aria-label={dataContact.ariaLabelTitle}
      />
      <FormEmail dataContact={dataContact} formEmailData={formEmailData} />
    </S.Wrapper>
  </>
);

export default MainContact;
