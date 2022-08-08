import styled from "styled-components";

export const FormContainer = styled.form`
  border: 1px solid #bdbdbd;
  border-radius: 7px;
  padding: 20px 40px;
  margin: 30px 0px;
  text-align: start;
  overflow-y: auto;
  height: 400px;

  @media (max-width: 568px) {
    padding: 20px 20px;
    flex-direction: column;
  }
`;
