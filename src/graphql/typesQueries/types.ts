/* eslint-disable @typescript-eslint/no-explicit-any */
export type imageLoads = {
  __typename?: any;
  url: string;
  alt?: string;
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

export type menuNav = {
  __typename?: any;
  openMenu: string;
  closeMenu: string;
  ariaLabe: string;
  navigationPage: navigationPage;
  linksNagivation: linksNagivation;
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
  };
}

export interface dataPageProps {
  data: {
    metas: metaDescription;
    logoPage: LogoPage;
    menuNav: menuNav;
  };
}
