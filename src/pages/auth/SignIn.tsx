import React from "react";
import {
  LeftSide,
  LeftSideText,
  LeftSideTextBold,
  Wrapper,
  Image,
  RightSide,
  Logo,
  Input,
  Button
} from "../../styles/SignIn.styles";
import img from "../../img/Auth_leftside_img.svg";
import logo from "../../img/ProList_logo.svg";

export const SignIn: React.FC = () => {
  const kek = {
    color: "#FF6565"
  };
  return (
    <Wrapper>
      <LeftSide>
        <LeftSideText>Work much more efficiently <br/> with <LeftSideTextBold>ProList</LeftSideTextBold></LeftSideText>
        <Image src={img} alt=""/>
      </LeftSide>
      <RightSide>
        <Logo src={logo} alt=""/>
        <Input type="text" placeholder="Login" theme={{ color: "#FF6565" }}/>
        <Input type="password" placeholder="Password" theme={{ color: "#79C7FF" }}/>
        <Button theme={{ color: "#79c7ff" }}>Sign in</Button>
        <Button theme={{ color: "#9f9f9f" }}>Sign up</Button>
      </RightSide>
    </Wrapper>
  );
};