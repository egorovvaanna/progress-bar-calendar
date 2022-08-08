import { Navigate } from "../Navigate/Navigate";
import { VerificationTitle } from "./TitleVerification";
import { createContext, FC, useState } from "react";
import { FormState, initialState } from "../../types";
import { Link } from "react-router-dom";

export const FormContext = createContext<FormState | any>(null);

export const Verification: FC = () => {
  const [form, setForm] = useState<initialState>({
    name: "",
    email: "",
    number: "",
    date: {day: '01', month: '01', year: 2000},
    sex: "",
    country: "",
  });
  return (
    <FormContext.Provider value={{ form, setForm }}>
      <div>
        <Link to="/"> наазад </Link>
        <VerificationTitle />
        <Navigate />
      </div>
    </FormContext.Provider>
  );
};
