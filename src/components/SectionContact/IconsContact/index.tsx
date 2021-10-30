import * as S from "./styles";

const IconsContact = () => (
  <>
    <S.Wrapper>
      <S.Links href="https://github.com/Henrique-Santos-2304" passHref>
        <S.Anchor>
          <S.ContentIcon>
            <S.Github />
          </S.ContentIcon>
        </S.Anchor>
      </S.Links>

      <S.Links
        href="https://www.linkedin.com/in/henriquewebdeveloper/"
        passHref
      >
        <S.Anchor>
          <S.ContentIcon>
            <S.Linkedin />
          </S.ContentIcon>
        </S.Anchor>
      </S.Links>

      <S.Links href="https://spfc.net" passHref>
        <S.Anchor title="11.96636-5190">
          <S.ContentIcon>
            <S.Whatsapp />
          </S.ContentIcon>
        </S.Anchor>
      </S.Links>
    </S.Wrapper>
  </>
);

export default IconsContact;
