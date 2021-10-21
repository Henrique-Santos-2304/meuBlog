/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: queryHome
// ====================================================

export interface queryHome_home_metaTagsIcons_iconPage {
  __typename: "UploadFile";
  name: string;
  url: string;
}

export interface queryHome_home_metaTagsIcons {
  __typename: "ComponentSectionMetaTagsAndIcons";
  titlePage: string;
  iconPage: queryHome_home_metaTagsIcons_iconPage[];
}

export interface queryHome_home_boxMain_email {
  __typename: "ComponentSectionEmail";
  email: string;
  ariaLabel: string;
  title: string;
  id: string;
}

export interface queryHome_home_boxMain_linksSocials_imageIcon {
  __typename: "UploadFile";
  alternativeText: string;
  url: string;
}

export interface queryHome_home_boxMain_linksSocials {
  __typename: "ComponentSectionLinksSocials";
  url: string;
  title: string;
  imageIcon: queryHome_home_boxMain_linksSocials_imageIcon;
  name: string;
  ariaLabel: string;
}

export interface queryHome_home_boxMain {
  __typename: "ComponentSectionBoxMain";
  name: string;
  profission: string;
  platform: string;
  email: queryHome_home_boxMain_email;
  linksSocials: queryHome_home_boxMain_linksSocials[];
}

export interface queryHome_home_userImage_imageUser {
  __typename: "UploadFile";
  name: string;
  url: string;
}

export interface queryHome_home_userImage {
  __typename: "ComponentSectionUserImage";
  alt: string;
  ariaLabel: string;
  imageUser: queryHome_home_userImage_imageUser;
}

export interface queryHome_home {
  __typename: "Home";
  title: string;
  metaTagsIcons: queryHome_home_metaTagsIcons;
  boxMain: queryHome_home_boxMain;
  userImage: queryHome_home_userImage;
}

export interface queryHome {
  home: queryHome_home;
}
