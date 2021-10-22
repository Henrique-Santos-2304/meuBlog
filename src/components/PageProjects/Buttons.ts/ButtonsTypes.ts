type Button = {
  url: string;
  label: string;
};

export type buttonsProps = {
  onOpen: () => void;
  buttons: Button[];
};
