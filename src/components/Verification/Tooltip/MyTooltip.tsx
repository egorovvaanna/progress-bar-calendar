import { FC, useState } from "react";
import {
  ToolArrow,
  ToolIcon,
  ToolText,
  TooltipContainer,
} from "../../../styles/tooltipStyles";

interface ToolTipProps {
  children: string;
}

export const MyTooltip: FC<ToolTipProps> = ({ children }) => {
  const [hover, setHover] = useState(false);

  return (
    <TooltipContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <ToolIcon>?</ToolIcon>
      <ToolArrow hover={hover}></ToolArrow>
      <ToolText hover={hover}> {children} </ToolText>
    </TooltipContainer>
  );
};
