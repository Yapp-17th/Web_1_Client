import React from 'react';
import styled from 'styled-components';

import HoverCake from 'components/cakeDetail/hoverCake';
import { Card, CardPastelData, Title, BannerTitle, Subtitle, SpanButton, ButtonFloating } from './commonStyles'

const MainPageLayout = styled.div`
  max-width: 1920px;
  
  display:block;
`;

const MainPageContainerBlock = styled.div< { type?: string } >`
  max-width: 1200px;
  margin-left: ${props => {
    switch(props.type) { 
      case "recommend":
        return "666px";
      default:
        return "calc((1920px - 1200px)/2)";
    }
  }};
  margin-right: ${props => {
    switch(props.type) { 
      case "recommend":
        return "403px";
      default:
        return "calc((1920px - 1200px)/2)";
    }
  }};
  /* margin-right: calc((1920px - 1200px)/2); */
  
  display: flex;
  flex-direction:column;
`

const SectionTop = styled(MainPageContainerBlock)`
  height: 552px;
  
  display: flex;
  justify-content:center;
`;

const SectionTopWrapper = styled.section`
  /* background-image: url('/assets/main_01.png'); */
  button {
    background-color: black;
    color: white;
    width: 136px;
    height: 48px;
    
    border-radius:10px;
    border: none;
  }
`

const SectionPopluar = styled(MainPageContainerBlock)`
  height: 552px;

  display: flex;
  justify-content:center;
`;
const SectionPopluarWrapper = styled.section`
  /* background-image: url('/assets/main_02.png'); */
`
const SectionPopularCardsWrapper = styled.div`
  display: flex;
  flex-direction: row !important;
`;

const SectionRecommendKeywordWrapper = styled.section``;

const SectionRecommendKeyword = styled(MainPageContainerBlock)`
  display: flex;

  height: 504px;
`;

const RecommendKeywordButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const RecommendKeywordButton = styled.button`
  width: fit-content;
  height: 48px;
  border: none;
  border-radius: 24px;
  margin: 11px 24px 13px;
  padding: 11px 24px 13px;
  
  background-color: #ffffff;
  box-shadow: 0 10px 40px 0 #fff1ea;
  mix-blend-mode: multiply;
`
const SectionNewWrapper = styled.section``;
const SectionNew = styled(MainPageContainerBlock)`
  display: flex;
  height: 1056px;
`;

const CakesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const SectionBottomWrapper = styled.section``;
const SectionBottom = styled(MainPageContainerBlock)`
  display: flex;

  height: 640px;
`;

const Column = styled.div``;

function MainPage(props : CakeDetailProps) {
  const {} = props;
  const clickSpanButton = ():void => {
    console.log("clickSpanButton !!");
    // window.location.href = 어디어디;
  }
  return (
    <MainPageLayout>
      {/* <MainPageContainerBlock> */}
      <SectionTopWrapper>
        <SectionTop>
          <Subtitle> 케이크 및 디저트 플랫폼 </Subtitle>
          <BannerTitle>
            소중한 사람을 위한 선물 <br /> 파스텔로 마음을 전해요.
          </BannerTitle>
          <br />
          <button>구경하기</button>

        </SectionTop>
      </SectionTopWrapper>
      <SectionPopluarWrapper >
        <SectionPopluar>
          <Subtitle> 인기 키워드 검색 </Subtitle>
          <Title>
            요즘 것들은... 무얼 좋아하는가?
          </Title>
          <SpanButton onClick={clickSpanButton}>
            더 보러가기 &gt;
          </SpanButton>
          <br />
          <SectionPopularCardsWrapper>
            <Card color="blue"/>
            <Card color="red"/>
            <Card color="yellow"/>
          </SectionPopularCardsWrapper>
        </SectionPopluar>
        
      </SectionPopluarWrapper>
      <SectionRecommendKeywordWrapper>
        <SectionRecommendKeyword type="recommend">
          <Column style={{position: "absolute", left:"115px", width: "502px", height:"279px", backgroundColor:"yellow"}}>
            이미지 자리
          </Column>
          <Column>
            <Subtitle> 추천 키워드 검색 </Subtitle>
            <div style={{display:"flex"}}>
              <Title> 소중한 날, 특별한 케이크와 함께 </Title>
              <SpanButton onClick={clickSpanButton}>
                Refresh
              </SpanButton>
            </div>
            <br />
            <RecommendKeywordButtonWrapper>
              <RecommendKeywordButton>111</RecommendKeywordButton>
              <RecommendKeywordButton>2222</RecommendKeywordButton>
              <RecommendKeywordButton>3333333333333</RecommendKeywordButton>
              <RecommendKeywordButton>444</RecommendKeywordButton>
              <RecommendKeywordButton>55</RecommendKeywordButton>
              <RecommendKeywordButton>666</RecommendKeywordButton>
              <RecommendKeywordButton>7777</RecommendKeywordButton>
              <RecommendKeywordButton>88888</RecommendKeywordButton>
              <RecommendKeywordButton>99</RecommendKeywordButton>
              <RecommendKeywordButton>10</RecommendKeywordButton>
              <RecommendKeywordButton>1111</RecommendKeywordButton>
            </RecommendKeywordButtonWrapper>
            

          </Column>
        </SectionRecommendKeyword>
      </SectionRecommendKeywordWrapper>
      <SectionNewWrapper>
        <SectionNew>
          <Subtitle> 최신 케이크 검색 </Subtitle>
          <div style={{display:"flex"}}>
            <Title> 맛있는 케이크 다 모여라 </Title>
            <SpanButton onClick={clickSpanButton}>
              Refresh &gt;
            </SpanButton>
          </div>
          <CakesWrapper>
            <HoverCake
              style={{ margin: '12px' }}
              title="체리 메이 블라썸 케이크"
              address="서울 마포구 매봉산로 75"
            />
            <HoverCake
              style={{ margin: '12px' }}
              title="체리 메이 블라썸 케이크"
              address="서울 마포구 매봉산로 75"
            />
            <HoverCake
              style={{ margin: '12px' }}
              title="체리 메이 블라썸 케이크"
              address="서울 마포구 매봉산로 75"
            />
            <HoverCake
              style={{ margin: '12px' }}
              title="체리 메이 블라썸 케이크"
              address="서울 마포구 매봉산로 75"
            />
            <HoverCake
              style={{ margin: '12px' }}
              title="체리 메이 블라썸 케이크"
              address="서울 마포구 매봉산로 75"
            />
            <HoverCake
              style={{ margin: '12px' }}
              title="체리 메이 블라썸 케이크"
              address="서울 마포구 매봉산로 75"
            />
            <HoverCake
              style={{ margin: '12px' }}
              title="체리 메이 블라썸 케이크"
              address="서울 마포구 매봉산로 75"
            />
            <HoverCake
              style={{ margin: '12px' }}
              title="체리 메이 블라썸 케이크"
              address="서울 마포구 매봉산로 75"
            />
          </CakesWrapper>
        </SectionNew>
      </SectionNewWrapper>
      <SectionBottomWrapper>
        <SectionBottom>
          <Subtitle> 파스텔 실시간 근황 </Subtitle>
          <div style={{display:"flex", justifyContent:"space-between", marginBottom:"56px"}}>
            <Title> 파스텔은 언젠가 대기업이 될 거예요! </Title>
            <span>불철주야 소비자를 위해 달리고 있습니다. <br />항상 응원해주시고 트래픽을 올려주세요. 불철주야 소비자를 위해 달리고.</span>
          </div>
          <div style={{display:"flex", justifyContent:"space-between"}}>
            <CardPastelData type={"hidden"}> </CardPastelData>
            <CardPastelData type={"hidden"}> </CardPastelData>
            <CardPastelData> </CardPastelData>
            <CardPastelData> </CardPastelData>
            <CardPastelData> </CardPastelData>
            <CardPastelData> </CardPastelData>
          </div>
        </SectionBottom>
      </SectionBottomWrapper>
      <ButtonFloating />
      {/* </MainPageContainerBlock> */}
    </MainPageLayout>
  );
}

export default MainPage;
