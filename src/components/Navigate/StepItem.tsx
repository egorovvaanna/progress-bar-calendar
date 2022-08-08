import { FC } from "react";

import "./StepItemStyle.scss";

interface StepProps {
  step: string;
  id: number;
  url: string;
  currentStep: boolean;
  setCurrentStep: (arg: number) => void;
}


export const StepItem: FC<StepProps> = ({
  step,
  id,
  setCurrentStep,
  url,
  currentStep,
}) => {
  return (
    <div className={"container" + (currentStep ? " selected" : "")}>
      <div className="circleWrapper">
        <div className="circle"> {id} </div>
      </div>
      <span> {step} </span>
    </div>

  );
};
