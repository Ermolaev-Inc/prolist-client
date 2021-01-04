import React from "react";
import {
  LeftSide,
  LeftSideText,
  LeftSideTextBold,
  Wrapper,
  Image,
  RightSide,
  Logo,
  Button
} from "../../styles/SignIn.styles";
import { Input } from "../../components/Input";
import img from "../../img/Auth_leftside_img.svg";
import logo from "../../img/ProList_logo.svg";

export const SignIn: React.FC = () => {
  return (
    <Wrapper>
      <LeftSide>
        <LeftSideText>Work much more efficiently <br/> with <LeftSideTextBold>ProList</LeftSideTextBold></LeftSideText>
        <Image src={img} alt=""/>
      </LeftSide>
      <RightSide>
        <Logo src={logo} alt=""/>
        <Input type="text" placeholder="Login" borderFocusColor="#FF6565" />
        <Input type="password" placeholder="Password" borderFocusColor="#79C7FF" />
        <Button theme={{ color: "#79c7ff" }}>Sign in</Button>
        <Button theme={{ color: "#9f9f9f" }}>Sign up</Button>
      </RightSide>
    </Wrapper>
  );
};