import { gql } from "@apollo/client";

export const GET_HOME = gql`
  query queryHome {
    home {
      title
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
        linksSocials {
          title
          url
          imageIcon {
            url
          }
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
