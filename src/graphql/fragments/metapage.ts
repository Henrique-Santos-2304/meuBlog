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
  fragment descriptionHome on PortfolioWeb {
    descriptionSection {
      title
      descriprions
    }
  }
  fragment projects on PortfolioWeb {
    sectionProject {
      title
      slidesProject {
        title
        urlProject
        ariaLabel
        ariaLabelButton
        image {
          alternativeText
          url
        }
        buttonText
      }
    }
  }
  fragment descriptionProjects on PortfolioWeb {
    descriptionProject {
      title
      descriprions
    }
  }
  fragment skilss on PortfolioWeb {
    sectionSkills {
      title
      arialabelTitle
      ariaLabel
      slidesCssSkilss {
        ariaLabel
        title
        image {
          alternativeText
          url
        }
      }
      slidesSkills {
        ariaLabel
        image {
          alternativeText
          url
        }
        title
      }
    }
  }
  fragment descriptionSkilss on PortfolioWeb {
    descriptionSkill {
      title
      descriprions
    }
  }
`;
