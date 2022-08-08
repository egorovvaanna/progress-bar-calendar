import { FC, useState,  useContext } from "react";
import { FormContext } from "../Verification";
import { MyTooltip } from "../Tooltip/MyTooltip";

import { Flex, Input, Ok } from "../../../styles/InputsStyles";


export const MyInputNumber: FC = () => {
  const { form, setForm } = useContext(FormContext);
  const [error, setError] = useState(false);
  const [ok, setOk] = useState(false);

  const validEmail = (e: string) => {
    setForm({...form, number: e });
    let name = /^\+?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
    if (e.match(name) && e !== "") {
      setError(false);
      setOk(true);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <label>
        <Flex>
          Телефон: <br />
          <MyTooltip children="+7999 999 99 99 онли рашн федерейшн ( " />
        </Flex>
        <Flex>
          <Input
            type="tel"
            name="number"
            placeholder="Номер телефона"
            value={form.number}
            onChange={(e) => validEmail(e.target.value)}
          />
          {ok ? <Ok /> : ""}
        </Flex>
      </label>
      <p style={{ color: "red" }}> {error ? "давай нормально, ну" : ""} </p>
    </div>
  );
};


