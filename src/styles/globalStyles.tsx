import styled from "styled-components";

export const Button = styled.button<any>`
  padding: 13px 20px;
  border: none;
  border-radius: 10px;
  background-color: #3db53dfc;
  color: white;
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 2px 3px 6px rgba(61, 61, 61, 0.524);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
    background-color: #236e23fc;
  }
`;
export const ButtonWhite = styled(Button)<any>`
  background-color: #e1e1e1fb;
  color: #585858;
  font-size: 15px;
   padding: 10px;
   text-align: center;
   display: flex;
  &:active {
    transform: scale(0.95);
    background-color: #838383fa;
  }
`;

export const ButtonNext = styled(Button)`
  background-color: ${(props) =>
    props.disable ? "#3db53dfc " : " #929292fb "};
`;

export const Input = styled.input`
  border: 1px solid #bdbdbd;
  border-radius: 7px;
  margin: 5px 0;
  padding: 10px 15px;
  :focus {
    outline: 2px solid #bdbdbd;
  }
`;
export const TitleContainer = styled.div`
  font-size: 20px;
  background-color: #a0a0a050;
  text-align: start;
  padding: 20px 30px 40px;
  margin: 30px 0px;
`;

