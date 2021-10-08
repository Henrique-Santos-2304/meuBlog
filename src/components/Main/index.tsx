/* eslint-disable @next/next/no-img-element */
import BoxUser from "components/BoxUser";
import * as S from "./styles";

const Main = () => {
  return (
    <S.ContentBody>
      <S.WrapperDescription>
        <h1> Desenvolvedor Web</h1>
        <p>React.Js</p>
      </S.WrapperDescription>
      <S.WrapperUser>
        <BoxUser />
      </S.WrapperUser>
    </S.ContentBody>
  );
};

export default Main;
