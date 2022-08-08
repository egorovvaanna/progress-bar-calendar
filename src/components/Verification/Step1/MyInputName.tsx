import { FC, useContext, useState } from "react";
import { MyTooltip } from "../Tooltip/MyTooltip";
import { FormContext } from "../Verification";

import { Flex, Input, Ok } from "../../../styles/InputsStyles";

export const MyInputName: FC = () => {
  const { form, setForm } = useContext(FormContext);
  const [error, setError] = useState(false);
  const [ok, setOk] = useState(false);


  const validName = (e: string) => {
    setForm({ ...form, name: e });
    const name = /^[а-яА-ЯёЁa-zA-Z]+$/;
    if (e.match(name) && e !== "") {
      setOk(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <label>
        <Flex>
          <span>Имя: </span>
          <MyTooltip children="в паспорте че написано?" />
        </Flex>

        <Flex>
          <Input
            type="text"
            name="name"
            placeholder="Имя"
            value={form.name}
            onChange={(e) => validName(e.target.value)}
          />
          {ok ? <Ok /> : ""}
        </Flex>
      </label>
      <p style={{ color: "red" }}>
        {" "}
        {error ? "Думаю, мамка назвала тебя не так" : ""}{" "}
      </p>
    </div>
  );
};

