import styled from "styled-components";
import { ReactComponent as Success } from "./../utils/ok.svg";

 export const Flex = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
export const Input = styled.input`
  border: 1px solid #bdbdbd;
  width: 90%;
  border-radius: 7px;
  margin: 5px 0;
  padding: 10px 15px;
  :focus {
    outline: 2px solid #bdbdbd;
  }
`;
export const NewInput = styled.input`
  border: 1px solid #bdbdbd;
  width: 90%;
  border-radius: 7px;
  margin: 5px 0;
  padding: 10px 15px;
  :focus{
    outline: 2px solid #bdbdbd;
  }
  :focus ~label, &:not(:placeholder-shown) ~label {
    top: -0.1rem;
    background-color: white;
    font-size: 0.7rem;
  }
`;
export const Label = styled.label`
  position: absolute;
  padding: 0px 8px;
  font-size: 1rem;
  left: 0.8rem;
  top: 1rem;
  transition: top 200ms ease,
  left 200ms ease,
  font-size 200ms ease;
  :active{
    top: 0rem;
  }
`;
export const Button = styled.button<any>`
  border: 1px solid #bdbdbd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 7px;
  padding: 10px 15px;
  text-align: start;
  :focus {
    outline: 2px solid #bdbdbd;
  }
  width: 180px;
`;

export const Ul = styled.ul<any>`
  border: 1px solid #bdbdbd;
  border-radius: 7px;
  padding: 10px 15px;
  display: ${(props) => (props.open ? "block" : "none")};
  width: 180px;
  z-index: 20;
`;
export const Li = styled.li<any>`
  padding: 7px;
  width: 180px;
  max-width: 100%;
  z-index: 20;
  :hover {
    background-color: #bdbdbd45;
    cursor: pointer;
  }
`;
export const LiYear = styled.li<any>`
  padding: 7px;
  width: 80px;
  max-width: 100%;
  z-index: 20;
  :hover {
    background-color: #bdbdbd45;
    cursor: pointer;
  }
`;

export  const Ok = styled(Success)`
margin-left: 10px;
`