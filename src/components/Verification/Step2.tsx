import { FC } from "react";
import { FormContainer } from "../../styles/formStyles";
import { MyInputNumber } from "./Step2/MyInputNumber";
import { MyInputEmail } from "./Step2/MyInputEmail";
import { MySearchSelect } from "./Step2/MySearchSelect";

export const Step2: FC = () => {
  return (
    <FormContainer>
      <div>
        <MyInputNumber />
        <MyInputEmail />
        <MySearchSelect />
      </div>
    </FormContainer>
  );
};
