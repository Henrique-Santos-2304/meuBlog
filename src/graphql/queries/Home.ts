import { gql } from "@apollo/client";

export const GET_HOME = gql`
  query queryHome {
    home {
      title
      createdAt
      updatedAt
      metaTagsIcons {
        titlePage
        iconPage {
          name
          url
        }
      }
      boxMain {
        name
        profission
        platform
        email {
          email
          ariaLabel
          title
          id
        }
        linksSocials {
          url
          title
          imageIcon {
            alternativeText
            url
          }
          name
          ariaLabel
        }
      }
      userImage {
        alt
        ariaLabel
        imageUser {
          name
          url
        }
      }
    }
  }
`;
