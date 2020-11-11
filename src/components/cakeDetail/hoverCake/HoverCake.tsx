import React from 'react';
import styled, { StyledComponentPropsWithRef } from 'styled-components';
import { BiBookmark } from 'react-icons/bi';

export interface HoverCakeProps extends StyledComponentPropsWithRef<'div'> {
  title: string;
  address: string;
}

function HoverCake({ title, address, ...rest }: HoverCakeProps) {
  return (
    <Wrapper {...rest}>
      <CakeImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPNA3FY8BoFki14SSvVE5wu3axlGvyIzTGJQ&usqp=CAU" />
      <Overlay>
        <CakeName>{title}</CakeName>
        <Address>{address}</Address>
        <Bookmark />
      </Overlay>
    </Wrapper>
  );
}

export default HoverCake;

const Bookmark = styled(BiBookmark)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 2rem;
  height: 2rem;
`;

const Overlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.3s linear;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  position: relative;
  width: 282px;
  height: 282px;
  &:hover ${Overlay} {
    opacity: 1;
  }
  cursor: pointer;
`;

const CakeImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const CakeName = styled.span`
  ${(props) => props.theme.font.n20m};
`;

const Address = styled.address`
  ${(props) => props.theme.font.n14r};
`;
