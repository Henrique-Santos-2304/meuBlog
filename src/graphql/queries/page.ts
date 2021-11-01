import { gql } from "@apollo/client";
import { FRAGMENTS } from "../fragments/metapage";

export const Query_PAGE = gql`
  ${FRAGMENTS}
  query page_data {
    portfolioWeb {
      ...metaDescript

      ...logoPage

      ...menuNav

      ...home
    }
  }
`;
