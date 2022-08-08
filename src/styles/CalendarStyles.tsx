import styled from "styled-components";
import { ReactComponent as DatePicker } from "./../utils/datePicker.svg";


export const Container = styled.div<any>`
  display: ${(props) => (props.visible ? "block" : "none")};
  width: 250px;
`;

export const Flex = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  background-color: #3db53dfc;
  position: relative;
`;

export const Month = styled.div`
  text-align: center;
  color: white;
  font-weight: 700;
  font-size: 20px;
  padding: 10px;
  position: relative;
`;
export const Years = styled.div`
  text-align: center;
  color: white;
  font-weight: 700;
  font-size: 20px;
  padding: 10px;
  position: relative;
`;

export const Ul = styled.div<any>`
  display: ${(props) => (props.open ? "block" : "none")};
  z-index: 500;
  position: absolute;
  border-radius: 10px;
  overflow: auto;
  max-height: 300px;
  top: 80%;
`;

export const Li = styled.div`
  padding: 10px 20px;
  max-width: 100%;
  z-index: 20;
  background-color: #f5f5f5f8;
  color: #585858;

  :hover {
    background-color: #74b474fb;
    cursor: pointer;
  }
`;

export const CalendarContainer = styled.div`
  min-width: 100%;
`;

export const Td = styled.td<any>`
  background-color: #74b474c3;
  padding: 3px 4px;
  text-align: right;

  :hover {
    background-color: #90cc90c3;
    cursor: pointer;
  }
`;
export const TdLight = styled(Td)`
  background-color: #74b474c3;

  :hover {
    background-color: #74b474c3;
    cursor: default;
  }
`;
export const Th = styled.th`
  background-color: #000000c3;
  color: white;
`;

export const Table = styled.table`
  min-width: 100%;
`;
export const Svg = styled.table`
  min-width: 100%;
`;

export const Date = styled(DatePicker)`
    position: absolute;
    right: 0.7em;
    top: 0.4rem;
    cursor: pointer;
`;
export const Rel = styled.div`
    position: relative
`;
