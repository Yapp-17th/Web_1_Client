import React from 'react';
import styled from 'styled-components';

import { FaMap } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';

import { Curation } from 'components/component/Curation';
import CakeDetail from 'components/search/CakeDetail';

export interface SearchProps {
    cakeCount: number;
}

function SearchPage({ cakeCount }: SearchProps) {
  return (
    <Wrapper>
      <StoreText>
        <Column>
        <SearchResult>필터 검색 결과</SearchResult>
        </Column>
        
        </StoreText>
        <FindCake>
            당신의 케이크를 찾아보세요
            <FindCakeCount>{cakeCount}개</FindCakeCount>
        </FindCake>
        <CakeInfo>
            <Column>
            <OverCuration label="사이즈"/>
            <OverCuration label="거리"/>
            <OverCuration label="평균제작일"/>
            <OverCuration label="영업시간"/>
            <OverCuration label="필터 추가 하기" selected={true}/>
            </Column>
            
            <Column>
                <Map>
                    <FaMap/>
                    지도보기
                </Map>
            </Column>

        
        </CakeInfo>

        <CakeInfo>
            <Column/>
            <Column>
                <FilterBtn>
                    
                    <Filter><RiArrowDropDownLine/> 관련도 순</Filter>

                    
                    <Filter><RiArrowDropDownLine/>앨범 형 </Filter>
                </FilterBtn>
            </Column>
        </CakeInfo>
        <Column>
            <CakeDetailWrapper>
                <OverCakeDetail cakeName="체리 메이 블라썸 케이크" storeName='카페원모어'></OverCakeDetail>
                <OverCakeDetail cakeName="체리 메이 블라썸 케이크" storeName='카페원모어'></OverCakeDetail>
                <OverCakeDetail cakeName="체리 메이 블라썸 케이크" storeName='카페원모어'></OverCakeDetail>
            </CakeDetailWrapper>
        </Column>
    </Wrapper>
  );
}

export default SearchPage;

const Wrapper = styled.div`
  /* max-width: 384px; */
`;
const FindCakeCount = styled.span`
  color: #1f1f1f;
  font-weight: bold;
  margin-left: 16px;
  opacity: 0.4;

`;
const StoreText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => props.theme.font.n14r};
  color: #1f1f1f;
`;
const Column = styled.div``;
const SearchResult = styled.span``;
const OverCuration = styled(Curation)`
  margin-right: 24px;
`;
const FindCake = styled.div`
  ${(props) => props.theme.font.n20m};
  margin-bottom : 48px;
`;
const CakeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Map = styled.div`
    display: inline-flex;
    align-items: flex-start;
    height: 1rem;
    opacity: 0.4;
    margin-left: 1rem;
    border-radius: 8px;
    background-color: #fcf1e7;
    padding: 15px 20px;
    svg {
    margin-right: 5px;
    }
`;

const FilterBtn = styled.div`
    display: inline-flex;
    align-items: flex-start;
    padding: 15px 30px;
    margin-right : 3rem;
`;

const Filter = styled.span`
    font-size: 16px;
    font-weight: 500;
    margin-left: 24px;
`;
const CakeDetailWrapper = styled.div`
    margin-top : 24px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
`;

const OverCakeDetail = styled(CakeDetail)`

`;