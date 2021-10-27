import * as S from "./styles";
import Link from "next/link";

const IconsContact = () => (
  <>
    <S.Wrapper>
      <Link href="https://github.com/Henrique-Santos-2304" passHref>
        <S.Anchor>
          <S.Github />
        </S.Anchor>
      </Link>

      <Link href="https://www.linkedin.com/in/henriquewebdeveloper/" passHref>
        <S.Anchor>
          <S.Linkedin />
        </S.Anchor>
      </Link>

      <Link href="https://spfc.net" passHref>
        <S.Anchor>
          <S.Whatsapp />
        </S.Anchor>
      </Link>
    </S.Wrapper>
  </>
);

export default IconsContact;
