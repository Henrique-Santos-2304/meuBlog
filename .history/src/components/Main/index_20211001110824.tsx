import { useCallback, useEffect, useState } from "react";
import * as S from "./styles";

const Main = () => {
  const value = "Desenvolvedor Web";
  const [text, setText] = useState("");

  //eslint-disable
  const typeWriter: any = useCallback(
    (text: string, i = 0) => {
      if (i < value.length) {
        setText(text.slice(0, i + 1));
        setTimeout(() => {
          typeWriter(text, i + 1);
        }, 100);
      }
    },
    [typeWriter]
  );
  if (text === value) {
    setTimeout(() => {
      setText("");
      typeWriter(value);
    }, 3000);
  }
  useEffect(() => {
    typeWriter(value);
  }, [typeWriter]);

  return (
    <S.Wrapper>
      <S.Tittle> Henrique dos Santos</S.Tittle>
      <S.Container>
        <S.Text>{text}</S.Text>
        <S.TextCursor />
      </S.Container>
    </S.Wrapper>
  );
};

export default Main;
