/* eslint-disable @next/next/no-img-element */
import * as S from "./styles";

import {
  queryHome_home_userImage,
  queryHome_home_boxMain,
} from "graphql/typesFinal/queryHome";

import IconsContact from "components/PageHome/IconsContact";
import HandleMediaQuery from "components/globalComponents/MediaQuery";

type props = {
  data: queryHome_home_userImage;
  links: queryHome_home_boxMain;
};

const ImageUserMain = (props: props) => {
  const { data, links } = props;

  const iconLink = {
    linksSocials: links.linksSocials,
    email: links.email,
  };

  return (
    <S.PhotoContent aria-label="Foto de um Programador/ Desenvolvedor  ">
      <S.ImageUser
        width={100}
        height={100}
        src={data.imageUser.url}
        alt={data.alt}
        aria-label={data.ariaLabel}
      />
      <HandleMediaQuery responsive="max-width" asWidth="767px" show={true}>
        <IconsContact contacts={iconLink} />
      </HandleMediaQuery>
    </S.PhotoContent>
  );
};

export default ImageUserMain;
