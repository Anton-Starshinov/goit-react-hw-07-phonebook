import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 10px;
  font-weight: bold;
  font-size: 20px;
  color: black;
  gap: 10px;
`;

export const LabelForm = styled.label``;

export const InputForm = styled.input`
  width: 200px;
  height: 20px;
  border-radius: 4px;
  margin-left: 5px;
`;

export const ButtonForm = styled.button`
  width: 150px;
  height: 30px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  color: black;
  background-color: lightsteelblue;
`;
