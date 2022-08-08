import { FC, useState, useContext } from "react";
import { FormContext } from "../Verification";

import { Button, Flex, Ok } from "../../../styles/InputsStyles";
import { Date, Rel } from "../../../styles/CalendarStyles";
import { Calendar } from "./Calendar/Calendar";

export const MyDate: FC = () => {
  const { form} = useContext(FormContext);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);
  const [ok, setOk] = useState(false);


  const currentDate = Object.values(form.date).join("-")

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <div >
      <label >
        Дата рождения:
        <Flex>
          <Rel>
            <Button type="button">
              {currentDate}
            </Button>
            <Date onClick={handleClick} />
          </Rel>

          <div>{ok ? <Ok /> : ""} </div>
        </Flex>
      </label>
      <Calendar visible={visible} setVisible={setVisible} />
      {error ? "а я?" : " "}
    </div>
  );
};
