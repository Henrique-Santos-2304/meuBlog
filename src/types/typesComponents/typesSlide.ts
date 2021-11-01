import { imageLoads } from "graphql/typesQueries/types";

export type imagesProps = {
  ariaLabel: string;
  title: string;
  image: imageLoads;
  urlProject?: string;
  ariaLabelButton?: string;
  buttonText?: string;
};
export type responsivePropsSlide = {
  breakpoint: number;
  settings: {
    slidesToShow: number;
    slidesToScroll: number;
    infinite: boolean;
    dots: boolean;
  };
};
export type slideImageprops = {
  images: imagesProps[];
  receptorCards: "skilss" | "projects";
  slidesToShow: number;
  slidesToScroll: number;
  marginBox: string;
  responsive?: responsivePropsSlide[];
};
