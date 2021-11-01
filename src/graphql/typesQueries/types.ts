/* eslint-disable @typescript-eslint/no-explicit-any */
export type imageLoads = {
  __typename?: any;
  url: string;
  alt?: string;
  alternativeText?: string;
};

export type metaDescription = {
  __typename?: any;
  metaDescription: string;
  title: string;
  iconPage: string;
  iconImagePage: imageLoads;
};

export type LogoPage = {
  __typename?: any;
  alt: string;
  title: string;
  imageLogo: imageLoads;
  preText: string;
  proText: string;
};

export type navigationPage = {
  __typename?: any;
  ariaLabel: string;
  imageNav: imageLoads;
};

export type linksNagivation = {
  __typename?: any;
  title: string;
  url: string;
  text: string;
};
export type OpenClose = {
  title: string;
  ariaLabel: string;
};

export type menuNav = {
  __typename?: any;
  openMenuNav: OpenClose;
  closeMenuNav: OpenClose;
  ariaLabe: string;
  navigationPage: navigationPage;
  linksNagivation: linksNagivation[];
};

export type myDescription = {
  welcome: string;
  name: string;
  devDescription: string;
};
export type photoUser = {
  alt: string;
  arialabel: string;
  userImage: imageLoads;
};

export type home = {
  ariaLabel: string;
  myDescription: myDescription;
  photoUser: photoUser;
};

export type descriptions = {
  title: string;
  descriprions: string;
};
export type slidesProject = {
  title: string;
  urlProject: string;
  ariaLabel: string;
  ariaLabelButton: string;
  image: imageLoads;
  buttonText: string;
};

export type projects = {
  title: string;
  slidesProject: slidesProject;
};

export type slidesSkilss = {
  ariaLabel: string;
  title: string;
  image: imageLoads;
};

export type skilss = {
  title: string;
  arialabelTitle: string;
  ariaLabel: string;
  slidesCssSkilss: slidesSkilss;
  slidesSkills: slidesSkilss;
};
export interface pageProps {
  portfolioWeb: {
    __typename?: any;
    metaDescription: string;
    title: string;
    iconPage: string;
    iconImagePage: imageLoads;
    logoPage: LogoPage;
    menuNav: menuNav;
    Home: home;
    descriptionSection: descriptions;
    sectionProject: projects;
    descriptionProject: descriptions;
    sectionSkills: skilss;
    descriptionSkill: descriptions;
  };
}

export interface dataPageProps {
  data: {
    metas: metaDescription;
    logoPage: LogoPage;
    menuNav: menuNav;
    home: home;
    descriptionHome: descriptions;
    descriptionProject: descriptions;
    descriptionSkills: descriptions;
    projects: projects;
    skilss: skilss;
  };
}
