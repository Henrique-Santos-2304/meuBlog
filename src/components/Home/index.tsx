/* eslint-disable @next/next/no-img-element */
import * as S from "./styles";
const Home = () => (
  <>
    <S.MyDescription>
      <S.ContentDescription
        aria-label="Minha Apresentação"
        data-testid="apresentation"
      >
        <S.Welcome>Bem vindo(a),</S.Welcome>
        <S.Name>
          Sou
          <strong> Henrique</strong>,
        </S.Name>
        <S.Dev>Desenvolvedor FrontEnd</S.Dev>
      </S.ContentDescription>

      <S.PhotoContent>
        <S.PhotoUser
          aria-label="Foto do Desenvolvedor dono do Portfólio"
          alt="Esse sou eu "
          src={
            "https://res.cloudinary.com/defnibbpl/image/upload/v1635196480/HomeMobile_ox93w6.png"
          }
          layout="fill"
        />
      </S.PhotoContent>
    </S.MyDescription>
  </>
);

export default Home;
