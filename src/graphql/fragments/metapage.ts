import { gql } from "@apollo/client";

export const FRAGMENTS = gql`
  fragment metaDescript on PortfolioWeb {
    metaDescription
    title
    iconPage
    iconImagePage {
      url
    }
  }
  fragment logoPage on PortfolioWeb {
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
  }
  fragment menuNav on PortfolioWeb {
    menuNav {
      ariaLabe
      openMenuNav {
        title
        ariaLabel
      }
      closeMenuNav {
        title
        ariaLabel
      }
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
  fragment home on PortfolioWeb {
    Home {
      ariaLabel
      myDescription {
        welcome
        name
        devDescription
      }
      photoUser {
        alt
        arialabel
        userImage {
          url
        }
      }
    }
  }
`;
