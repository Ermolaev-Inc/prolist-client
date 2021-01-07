import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  color: string;
}

const ButtonStyle = styled.button<Partial<Props>>`
  font-size: 24px;
  font-weight: 700;
  border: 0;
  background-color: #ffffff;
  color: ${props => props.theme.color};
  outline: none;
  cursor: pointer;
  text-decoration: none;
  transition: 0.2s;
  padding: 15px 30px;
  border-radius: 15px;
  :hover {
    background-color: ${props => props.theme.color};
    box-shadow: 0 0 10px ${props => props.theme.color}, 0 0 30px ${props => props.theme.color}, 0 0 35px ${props => props.theme.color};
    color: #ffffff;
  }
`;

export const NeonButton: React.FC<Partial<Props>> = ({
  title = "OK",
  color = "#79C7FF",
  ...props
}) => {
  return (
    <ButtonStyle
      theme={{ color }}
      {...props}
    >
      {title}
    </ButtonStyle>
  );
};
