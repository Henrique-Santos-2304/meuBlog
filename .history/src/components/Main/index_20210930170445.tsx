import { useEffect, useState } from "react";
import * as S from "./styles";
import imageBackground from "../../../public/img/background.png";

const Main = () => {
  const value = "Desenvolvedor Web";
  const [text, setText] = useState("");

  useEffect(() => {
    typeWriter(value);
  }, []);
  const typeWriter = (text: string, i = 0) => {
    if (i < value.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => {
        typeWriter(text, i + 1);
      }, 100);
    }
  };
  if (text === value) {
    setTimeout(() => {
      setText("");
      typeWriter(value);
    }, 3000);
  }

  return (
    <S.Wrapper img={imageBackground}>
      <S.Tittle> Henrique dos Santos</S.Tittle>
      <S.Container>
        <S.Text>{text}</S.Text>
        <S.TextCursor />
      </S.Container>
    </S.Wrapper>
  );
};

export default Main;
