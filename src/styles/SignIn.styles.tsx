import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #ffffff;
`;

export const LeftSide = styled.div`
  @media (min-width: 1024px) {
    width: 34.4%;
    height: 100%;
    background-color: #4e51ba;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`;

export const LeftSideText = styled.p`
  @media (max-width: 1024px) {
    opacity: 0;
  }
  font-size: 24px;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  margin-top: 5%;
`;

export const LeftSideTextBold = styled.span`
  font-weight: 500;
`;

export const Image = styled.img`
  @media (max-width: 1024px) {
    opacity: 0;
  }
  width: 100%
`;

export const RightSide = styled.div`
  width: 65.6%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  margin-top: 5%;
  margin-bottom: 12%;
  display: block;      
  width: 48px;
  height: 63px;
`;

export const Input = styled.input`
  padding: 0;
  border-bottom-width: 4px;
  border-bottom-color: #e6e6e6;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  width: 30%;
  height: 6%;
  margin-bottom: 5%;
  ::placeholder {
    color: #e6e6e6;
    font-size: 24px;
    font-weight: 500;
  }
  outline: none;
  color: #000000;
  font-size: 24px;
  :focus {
    border-bottom-color: ${props => props.theme.color};
  }
`;

export const Button = styled.button`
  margin-top: 5%;
  font-size: 24px;
  font-weight: 700;
  border: 0;
  background-color: #ffffff;
  color: ${props => props.theme.color};
  outline: none;
  cursor: pointer;
`;