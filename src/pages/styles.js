import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const BoxOfInputs = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LabelOfInput = styled.label`
  width: 70%;
  font-size: 12px;
`;

export const LabelAndInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const InputDate = styled.input`
  height: 40px;
  width: 100%;
  margin-right: 5%;
`;

export const InputText = styled.input`
  height: 40px;
  width: 70%;
`;