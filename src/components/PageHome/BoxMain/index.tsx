import * as S from "./styles";
import HandleMediaQuery from "components/globalComponents/MediaQuery";

import { queryHome_home_boxMain } from "graphql/typesFinal/queryHome";
import IconsContact from "components/PageHome/IconsContact";

type props = {
  data: queryHome_home_boxMain;
};
const BoxMain = ({ data }: props) => {
  const iconLink = {
    linksSocials: data.linksSocials,
    email: data.email,
  };
  return (
    <S.Wrapper aria-Label="Descrições de um Desenvolvedor FrontEnd">
      <S.EffectTopText></S.EffectTopText>
      <S.Name>{data.name}</S.Name>
      <S.Profission>{data.profission}</S.Profission>
      <S.Platforms>{data.platform}</S.Platforms>

      <HandleMediaQuery responsive="min-width" asWidth="767px" show={true}>
        <IconsContact contacts={iconLink} />
      </HandleMediaQuery>
    </S.Wrapper>
  );
};

export default BoxMain;
