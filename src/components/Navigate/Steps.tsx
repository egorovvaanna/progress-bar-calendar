import { FC } from "react";
import styled from "styled-components";
import { StepItem } from "./StepItem";

interface Step {
  step: string;
  url: string;
}

interface StepsProps {
  steps: Step[];
  currentStep: number;
  setCurrentStep: (arg: number) => void;
}

export const Steps: FC<StepsProps> = ({
  steps,
  currentStep,
  setCurrentStep,
}) => {
  return (
    <StepsContainer>
      {steps.map((step, index) => (
        <StepItem
          step={step.step}
          id={index + 1}
          url={step.url}
          key={index}
          setCurrentStep={setCurrentStep}
          currentStep={currentStep === index + 1}
        />
      ))}
    </StepsContainer>
  );
};

const StepsContainer = styled.div`
  display: flex;
  font-size: 12px;
  max-width: 500px;
  margin: 0 auto;
  @media(max-width:500px){
    flex-direction: column;
    
  }
  `;
