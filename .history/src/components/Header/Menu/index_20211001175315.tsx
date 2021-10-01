import * as S from "./styles";
import ActiveLink from "../ActiveLink"

const Menu = () => (
  <S.Wrapper>
    <<nav>
               <ActiveLink activeClassName={active} href="/">
                  <a>Home</a>
               </ActiveLink>
               <ActiveLink activeClassName={active} href={`/posts?`}>
                  <a>Posts</a>
               </ActiveLink>
            </nav>
  </S.Wrapper>
);

export default Menu;
