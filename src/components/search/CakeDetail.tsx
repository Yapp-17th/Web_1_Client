import React from 'react';
import styled from 'styled-components';
import { BiWalk } from 'react-icons/bi';
import { MdCake } from 'react-icons/md';
import { AiFillHeart } from 'react-icons/ai';

export interface CakeDetailProps {
  cakeName: string;
  storeName: string;
}

function CakeDetail({ cakeName, storeName }: CakeDetailProps) {
  return (
    <Wrapper>
      <CakeImage src="https://s3.ap-northeast-2.amazonaws.com/om-public-static/media/images/products/2020/06/aurorapurplecake_thum.jpg" />
      <StoreText>
        <Column>
          <StoreName>{storeName}</StoreName>
        </Column>
        <Column>
          <StoreInfo>
            <MdCake />3
          </StoreInfo>
          <StoreInfo>
            <AiFillHeart />
            325
          </StoreInfo>
          <StoreInfo>
            <BiWalk />
            3km
          </StoreInfo>
        </Column>
      </StoreText>
      <CakeName>{cakeName}</CakeName>
      <CakeInfo>
        <Column>
          <AverageText>평균 제작일</AverageText>
          <Average>3일</Average>
        </Column>
        <Column>
          <Price>26,000</Price>
          <PriceText>원</PriceText>
        </Column>
      </CakeInfo>
    </Wrapper>
  );
}

export default CakeDetail;

const Wrapper = styled.div`
  max-width: 384px;
  padding : 5px;
`;
const CakeImage = styled.img`
  width: 384px;
  border-radius: 5px;
  margin-bottom: 0.5rem;
`;
const StoreText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => props.theme.font.n14r};
  color: #1f1f1f;
`;
const Column = styled.div``;
const StoreName = styled.span``;
const StoreInfo = styled.div`
  display: inline-flex;
  align-items: flex-start;
  height: 1rem;
  opacity: 0.4;
  margin-left: 1rem;
  svg {
    margin-right: 5px;
  }
`;
const CakeName = styled.div`
  ${(props) => props.theme.font.n20m};
`;
const CakeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AverageText = styled.span`
  ${(props) => props.theme.font.n14r};
  color: #1f1f1f;
  margin-right: 0.5rem;
`;
const Average = styled.span`
  ${(props) => props.theme.font.n14m}
`;
const Price = styled.span`
  ${(props) => props.theme.font.n20m};
  margin-right: 0.5rem;
`;
const PriceText = styled.span`
  ${(props) => props.theme.font.n20m};
  opacity: 0.4;
`;
