/* eslint-disable @next/next/no-img-element */
import * as S from "./styles";

import IconsContact from "components/PageHome/IconsContact";
import HandleMediaQuery from "components/globalComponents/MediaQuery";

import {
  queryHome_home_userImage,
  queryHome_home_boxMain,
} from "graphql/typesFinal/queryHome";

type props = {
  data: queryHome_home_userImage;
  links: queryHome_home_boxMain;
};

const ImageUserMain = ({ data, links }: props) => {
  return (
    <S.PhotoContent aria-label="Foto de um Programador/ Desenvolvedor  ">
      <S.ImageUser
        src={data.imageUser.url}
        alt={data.alt}
        aria-label={data.ariaLabel}
      />

      <HandleMediaQuery responsive="max-width" asWidth="767px" show={true}>
        <IconsContact contacts={links} />
      </HandleMediaQuery>
    </S.PhotoContent>
  );
};

export default ImageUserMain;
