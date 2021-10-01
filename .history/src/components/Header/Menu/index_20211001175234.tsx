import * as S from "./styles";

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
