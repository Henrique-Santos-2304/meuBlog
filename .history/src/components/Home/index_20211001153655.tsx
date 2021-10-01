import * as S from "./styles";

const Home = () => {
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

export default Home;
