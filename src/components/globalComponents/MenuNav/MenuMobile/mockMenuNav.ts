import { mockButtonTooglrMenu } from "../ButtonToogleMenu/mockButtonToogleMenu";
import { mocknavLinks } from "../LinksNav/mockNaviLinks";

export const mockMenuNav = {
  menuNav: {
    openMenuNav: mockButtonTooglrMenu.openMenu,
    closeMenuNav: mockButtonTooglrMenu.closeMenu,
    linksNagivation: mocknavLinks.navigations,
    navigationPage: {
      ariaLabel: "Menu de nagação de telas",
      imageNav: {
        url: "https://res.cloudinary.com/defnibbpl/image/upload/v1635695300/image_User_940e9f11e7_34563f5075_b3e5a88c9b.jpg",
        alt: "esse sou eu",
      },
    },

    ariaLabe: "Botão de abrir e fechar menu de navegação",
  },
};
