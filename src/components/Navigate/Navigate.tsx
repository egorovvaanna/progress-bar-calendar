import { FC, useState, useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Steps } from "./Steps";

import styled from "styled-components";
import { Button, ButtonNext } from "../../styles/globalStyles";
import { FormContext } from "../Verification/Verification";

export const Navigate: FC = () => {
  const { form } = useContext(FormContext);
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  // const allTrue = Object.values(form).every((el) => el !== "");

  const steps = [
    { step: "Имя, возраст", url: "1" },
    { step: "Обратная связь", url: "2" },
    { step: "Место обитания", url: "3" },
    { step: "Формы ради форм", url: "4" },
    { step: "Проверь че написал", url: "5" },
  ];

  const nextStep = () => {
    if (currentStep === 5) return;
    setCurrentStep((prev) => prev + 1);
    const url = currentStep + 1;
    navigate(url.toString());
  };

  const prevStep = () => {
    if (currentStep === 1) return;
    setCurrentStep((prev) => prev - 1);
    const url = currentStep - 1;
    navigate(url.toString());
  };
  return (
    <NavigateContainer>
      <Steps
        steps={steps}
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
      />
      <Outlet />
      <ButtonsContainer>
        <Button onClick={prevStep}> Назад </Button>

        <ButtonNext
          // disable={allTrue}
          // disabled={allTrue ? false : true}
          onClick={nextStep}>
          {" "}
          Дальше{" "}
        </ButtonNext>
      </ButtonsContainer>
    </NavigateContainer>
  );
};

const NavigateContainer = styled.div`
`;

const ButtonsContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
