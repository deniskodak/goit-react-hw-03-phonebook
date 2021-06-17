import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 30px;
`;

const Input = styled.input`
  padding: 6px 8px;
  border-radius: 7%;
  outline: none;

  &:focus {
    border-color: #03a9f4;
  }
`;

export { Label, Input };
