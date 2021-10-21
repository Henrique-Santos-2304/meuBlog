import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query {
    projectsPreview {
      metaDescription {
        titlePage
        iconPage {
          url
        }
      }
      sectionProjectPreview {
        title
      }
      cardSlides {
        title
        miniDescription
        imageFront {
          alt
          ariaLabel
          imageUser {
            url
          }
        }
        buttons {
          label
          url
        }
      }
    }
  }
`;
