import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  width:300px;
  height:300px;
  background-color: ${props => props.color};  
`;

export const CardPastelData = styled.div<{type?: string}>`
  width: 180px;
  height: 248px;
  margin-left: 24px;
  padding: 36px 0 80px;
  opacity: 0.8;
  background-color: #494949;
  visibility: ${props => {
    if (props.type === "hidden"){ 
      return "hidden"; 
    }
  }};
`
export const BannerTitle = styled.div`
  ${(props) => props.theme.font.n36m};
`;

export const Title = styled.div`
  ${(props) => props.theme.font.n26b}
`
export const Subtitle = styled.div`
  ${(props) => props.theme.font.n14r}
`;
export const SpanButton = styled.span`
  cursor: pointer;
`;

export const ButtonFloating = styled.button`
  position: fixed;
  bottom: 5%;
  left:80%;

  width: 88px;
  height: 88px;
  padding: 20px;
  border-radius: 50%;
  
  box-shadow: 0 12px 30px 0 rgba(0, 0, 0, 0.3);
  background-color: #000000;
`