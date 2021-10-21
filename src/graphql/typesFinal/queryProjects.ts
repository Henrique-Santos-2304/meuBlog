interface upLoadFile {
  __typename?: any;
  url: string;
}

export interface metaDescriptionProps {
  __typename?: any;
  titlePage: string;
  iconPage: upLoadFile[];
}
export interface sectionProjectPreview {
  __typename?: any;
  title: "Meus projetos";
}

interface buttonProps {
  __typename?: any;
  label: string;
  url: string;
}
export interface cardSlidesProps {
  miniDescription: string;
  title: string;
  __typename?: any;
  buttons: buttonProps[];
  imageFront: {
    alt: string;
    ariaLabel: string;
    imageUser: {
      url: string;
    };
  };
}

export interface titleSectionProps {
  title: string;
  __typename?: any;
}

export interface queryProjectsPage {
  projectsPreview: {
    __typename?: any;
    cardSlides: cardSlidesProps;
    metaDescription: metaDescriptionProps;
    sectionProjectPreview: titleSectionProps;
  };
}
