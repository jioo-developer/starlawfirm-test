import { css } from "@emotion/react";

export const style = css`
  position: fixed;
  bottom: 35px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: #007bff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  z-index: 900;

  &:hover {
    transform: scale(1.1);
    background-color: #0056b3;
  }

  &::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-left: 3px solid white;
    border-top: 3px solid white;
    transform: rotate(-315deg);
    margin-bottom: -3px;
    margin-right: -0.5px;
  }
`;
