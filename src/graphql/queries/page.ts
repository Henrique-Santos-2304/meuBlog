import { gql } from "@apollo/client";

export const Query_PAGE = gql`
  query page_data {
    portfolioWeb {
      metaDescription
      title
      iconPage
      iconImagePage {
        url
      }
      logoPage {
        alt
        title
        url
        imageLogo {
          url
        }
        preText
        proText
      }

      menuNav {
        openMenu
        closeMenu
        ariaLabe
        navigationPage {
          ariaLabel
          imageNav {
            url
          }
        }
        linksNagivation {
          title
          url
          text
        }
      }
    }
  }
`;
