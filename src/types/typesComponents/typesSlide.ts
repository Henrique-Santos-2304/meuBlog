export type imagesProps = {
  img: string;
  title: string;
  buttonCode?: string;
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
  marginBox: string;
  responsive?: responsivePropsSlide[];
};
