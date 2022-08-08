import styled from "styled-components";

export const TooltipContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 15px;
  height: 15px;
  margin-left: 10px;
`;

export const ToolIcon = styled.div`
  background-color: #bdbdbd;
  padding: 3px;
  width: 15px;
  height: 15px;
  font-size: 10px;
  font-weight: 600;
  border-radius: 50%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToolText = styled.div<any>`
  position: absolute;
  left: 20px;
  z-index: 100;
  line-height: 15px;
  background-color: #bdbdbd;
  border-radius: 7px;
  min-width: 200px;
  word-wrap: break-word;

  padding: 5px 10px;
  display: ${(props) => (props.hover ? "block" : "none")};
`;

export const ToolArrow = styled.div<any>`
  position: absolute;
  display: ${(props) => (props.hover ? "block" : "none")};
  left: 50%;
  border-width: 8px;
  border: 8px solid transparent;
  border-right: 8px solid #bdbdbd;
`;
