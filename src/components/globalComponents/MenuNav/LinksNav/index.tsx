/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as S from "./styles";
import Link from "next/link";
import { linksNagivation } from "graphql/typesQueries/types";

type propsNavigation = {
  navigations: linksNagivation[];
};

const LinkNav = ({ navigations }: propsNavigation) => (
  <>
    {navigations!.map((nav) => (
      <S.ContentLink key={nav.title}>
        <Link href={nav.url}>{nav.text}</Link>
      </S.ContentLink>
    ))}
  </>
);

export default LinkNav;
