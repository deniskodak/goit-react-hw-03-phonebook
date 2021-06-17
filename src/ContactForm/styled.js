import styled from "styled-components";

const Input = styled.input`
  padding: 6px 8px;
  border-radius: 7%;
  outline: none;

  &:focus {
    border: 2px solid #03a9f4;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 15px;
`;

const Form = styled.form`
  padding: 30px 30px;
`;

const Button = styled.button`
  background: #03a9f4;
  border-radius: 10%;
  outline: none;
  color: white;
  padding: 6px 10px;
  border-color: #6f97a8;
  transition: transform 300ms linear;

  &:hover,
  &:focus {
    transform: scale(1.25);
  }

  &:active {
    color: #03a9f4;
    background: transparent;
  }
`;

export { Input, Label, Form, Button };
