import React from 'react';
import styled from 'styled-components';
import HoverCake from 'components/cakeDetail/hoverCake';

function CakeDetail() {
  return (
    <>
      <Wrapper>
        <SubTitle>케이크 상세 저보</SubTitle>
        <Title>당신이 찾은 케이크에요</Title>
      </Wrapper>
      <Wrapper>
        <SubTitle>관련 키워드 추천</SubTitle>
        <Title>다른 케이크도 구경해봐요</Title>
      </Wrapper>
      <CakeWrapper>
        <HoverCake
          style={{ margin: '12px' }}
          name="체리 메이 블라썸 케이크"
          address="서울 마포구 매봉산로 75"
        />
        <HoverCake
          style={{ margin: '12px' }}
          name="체리 메이 블라썸 케이크"
          address="서울 마포구 매봉산로 75"
        />
        <HoverCake
          style={{ margin: '12px' }}
          name="체리 메이 블라썸 케이크"
          address="서울 마포구 매봉산로 75"
        />
        <HoverCake
          style={{ margin: '12px' }}
          name="체리 메이 블라썸 케이크"
          address="서울 마포구 매봉산로 75"
        />
        <HoverCake
          style={{ margin: '12px' }}
          name="체리 메이 블라썸 케이크"
          address="서울 마포구 매봉산로 75"
        />
        <HoverCake
          style={{ margin: '12px' }}
          name="체리 메이 블라썸 케이크"
          address="서울 마포구 매봉산로 75"
        />
        <HoverCake
          style={{ margin: '12px' }}
          name="체리 메이 블라썸 케이크"
          address="서울 마포구 매봉산로 75"
        />
        <HoverCake
          style={{ margin: '12px' }}
          name="체리 메이 블라썸 케이크"
          address="서울 마포구 매봉산로 75"
        />
      </CakeWrapper>
    </>
  );
}

export default CakeDetail;

const Wrapper = styled.section`
  margin: 0 auto;
  width: 1200px;
`;

const CakeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1224px;
  margin: 0 auto;
`;

const Title = styled.div`
  ${(props) => props.theme.font.n26b};
`;

const SubTitle = styled.div`
  ${(props) => props.theme.font.n14r};
`;
