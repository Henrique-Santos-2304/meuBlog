import styled from "styled-components";
import Image from "next/image";

type marginProps = {
  marginBox: string;
};
export const ContainerSkilss = styled.div<marginProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.55);
  margin: ${({ marginBox }) => marginBox};
  padding: 1rem 0.5rem;
  border-radius: 1rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 0.3rem;
    height: 70%;
    top: 50%;
    right: -1.5rem;
    transform: translateY(-50%);
    background: ${({ theme }) => theme.colors.effectsPrimary};
  }
`;
export const ContentImage = styled.div`
  width: 5rem;
  height: 4rem;
  position: relative;
`;
export const ImageSkilss = styled(Image)``;

export const TitleSkilss = styled.h3`
  margin-top: 1.3rem;
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: 300;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;
