import { gql } from "@apollo/client";

export const GET_FOOTER = gql`
  query queryFooter {
    footer {
      createdBy
    }
  }
`;