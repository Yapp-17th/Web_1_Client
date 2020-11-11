import React from 'react';
import styled from 'styled-components';
import HoverCake from 'components/cakeDetail/hoverCake';

function CakeDetail() {
  return (
    <>
      <Wrapper>
        <HoverCake
          title="체리 메이 블라썸 케이크"
          address="서울 마포구 매봉산로 75"
        />
        <HoverCake
          title="체리 메이 블라썸 케이크"
          address="서울 마포구 매봉산로 75"
        />
        <HoverCake
          title="체리 메이 블라썸 케이크"
          address="서울 마포구 매봉산로 75"
        />
        <HoverCake
          title="체리 메이 블라썸 케이크"
          address="서울 마포구 매봉산로 75"
        />
        <HoverCake
          title="체리 메이 블라썸 케이크"
          address="서울 마포구 매봉산로 75"
        />
        <HoverCake
          title="체리 메이 블라썸 케이크"
          address="서울 마포구 매봉산로 75"
        />
        <HoverCake
          title="체리 메이 블라썸 케이크"
          address="서울 마포구 매봉산로 75"
        />
        <HoverCake
          title="체리 메이 블라썸 케이크"
          address="서울 마포구 매봉산로 75"
        />
      </Wrapper>
    </>
  );
}

export default CakeDetail;

const Wrapper = styled.section`
  margin: 0 auto;
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
`;
