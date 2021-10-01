import * as S from "./styles";
import ActiveLink from "../ActiveLink"

const Menu = () => (
  <S.Wrapper>
    <<nav>
               <ActiveLink activeClassName={S.active} href="/">
                  <a>Home</a>
               </ActiveLink>
               <ActiveLink activeClassName={S.active} href={`/posts?`}>
                  <a>Posts</a>
               </ActiveLink>
            </nav>
  </S.Wrapper>
);

export default Menu;
