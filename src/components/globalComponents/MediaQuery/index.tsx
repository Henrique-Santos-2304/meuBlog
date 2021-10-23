import * as S from "./styles";
export interface mediasProps {
  responsive: string;
  asWidth: string;
  show: boolean;
}
interface ElementMediaQueryProps extends mediasProps {
  children: React.ReactNode;
}
const HandleMediaQuery = ({
  responsive,
  asWidth,
  show,
  children,
}: ElementMediaQueryProps) => {
  return (
    <S.FlexMediaQuery
      responsive={responsive}
      asWidth={asWidth}
      show={show}
      data-testid="media-query"
    >
      {children}
    </S.FlexMediaQuery>
  );
};

export default HandleMediaQuery;
