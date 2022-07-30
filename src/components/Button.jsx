import React from "react";
import styled from "styled-components";

const MyCustomButton = styled.button`
  color: ${(props) => props.myColor};
  border: 2px solid ${(props) => props.myColor};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  width: 50px;
  height: 50px;

  &:hover {
    opacity: 0.9;
  }
`;

const Button = ({ handleClick, buttonText, colorFromProps }) => {
  return (
    <MyCustomButton
      myColor={colorFromProps}
      onClick={() => {
        handleClick();
      }}
    >
      {buttonText}
    </MyCustomButton>
  );
};

export default Button;
