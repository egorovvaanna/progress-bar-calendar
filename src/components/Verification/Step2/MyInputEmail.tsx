import { FC, useContext, useState } from "react";

import { FormContext } from "../Verification";
import { Flex, Input, Ok, Label, NewInput } from "../../../styles/InputsStyles";



export const MyInputEmail: FC = () => {
  const { form, setForm } = useContext(FormContext);
  const [error, setError] = useState(false);
  const [ok, setOk] = useState(false);

  const validEmail = (e: string) => {
    setForm({ ...form, email: e });
    const name =
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)i/;
    if (e.match(name) && e !== "") {
      setOk(true);
      setError(false);
    } else {
      setError(true);
      setOk(false);
    }
  };

  return (
    <div>
      <Flex style={{position:"relative"}}>
        <NewInput type="email" placeholder=" "  value={form.email}
            onChange={(e) => validEmail(e.target.value)}/>
        <Label> Email </Label>
        {ok ? <Ok /> : ""}
      </Flex>
      <p style={{ color: "red" }}> {error ? "Некорректный email" : ""} </p>
    </div>
  );
};