import React from "react";
import styled from "styled-components";

interface Props {
  type: string;
  placeholder: string;
  borderFocusColor: string;
}

const SInput = styled.input<Partial<Props>>`
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
    border-bottom-color: ${props => props.theme.borderFocusColor};
  }
`;

export const Input: React.FC<Partial<Props>> = ({
  type = "text",
  placeholder = "Placeholder",
  borderFocusColor = "#79c7ff"
}) => {
  return <SInput
    type={type}
    placeholder={placeholder}
    theme={{
      borderFocusColor
    }}
  />;
};