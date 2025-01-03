import { css } from "@emotion/react";

export const Style = css`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Arial, sans-serif;
  margin-top: 50px;

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 8px;

    @media all and (max-width: 760px) {
      width: 80%;
    }
  }

  .page-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;

    @media all and (max-width: 760px) {
      width: 28px;
      height: 23px;
    }

    button {
      width: 100%;
    }
  }

  .page-item.active {
    background-color: #e5e7eb;

    .page-link {
      color: #000;
      font-weight: bold;
    }

    .pagination .dots {
      cursor: default;
      color: #999;
    }
  }

  .page-link {
    text-decoration: none;
    color: #555;
    font-size: 1rem;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.125rem;
    color: #555;

    &:focus {
      outline: none;
    }
  }
`;
