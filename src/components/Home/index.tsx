/* eslint-disable @next/next/no-img-element */
import * as S from "./styles";
import { home } from "graphql/typesQueries/types";

type homeProps = {
  dataHome: home;
};
const Home = ({ dataHome }: homeProps) => {
  const nameResponse = dataHome.myDescription.name;
  const name = nameResponse.split(",");
  return (
    <>
      <S.MyDescription>
        <S.ContentDescription
          aria-label={dataHome.ariaLabel}
          data-testid="apresentation"
        >
          <S.Welcome>{dataHome.myDescription.welcome},</S.Welcome>
          <S.Name>
            {name[0]}
            <strong> {name[1]}</strong>,
          </S.Name>
          <S.Dev>{dataHome.myDescription.devDescription}</S.Dev>
        </S.ContentDescription>

        <S.PhotoContent>
          <S.PhotoUser
            aria-label={dataHome.photoUser.arialabel}
            alt={dataHome.photoUser.alt}
            src={dataHome.photoUser.userImage.url}
            layout="fill"
          />
        </S.PhotoContent>
      </S.MyDescription>
    </>
  );
};

export default Home;
