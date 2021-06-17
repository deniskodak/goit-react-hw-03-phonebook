import styled from "styled-components";

const Li = styled.li`
  display: flex;
  justify-content: space-around;
  padding: 10px 10px;
  border-radius: 4%;
  width: calc(100% / 3);
  font-size: 16px;

  box-shadow: 4px 5px 7px #2174f396;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  border-radius: 50%;
  border-color: #fff;
  background: transparent;
  box-shadow: 2px 1px 8px 1px rgb(25 75 211 / 43%);
  color: #03a9f4;

  &:hover,
  &:focus {
    box-shadow: 2px 1px 8px 1px #f44336;
  }
`;

export { Li, Button };
