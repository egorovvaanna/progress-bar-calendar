import { FC } from "react";
import { MyDate } from "./Step1/MyDate";
import { MySelect } from "./Step1/MySelectSex";
import { MyInputName } from "./Step1/MyInputName";

import { FormContainer } from "../../styles/formStyles";
import { Calendar } from './Step1/Calendar/Calendar';

export const Form: FC = () => {
  return (
    <FormContainer>
      <MyInputName />
      <MyDate />
      <MySelect />
    </FormContainer>
  );
};
