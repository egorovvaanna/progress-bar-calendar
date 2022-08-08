
import { FC, useState, useContext, MouseEvent, useEffect, useRef } from "react";
import { ReactComponent as Arrow } from "./../../../utils/arrow.svg";

import { Flex, Button, Ul, Li, Ok } from "../../../styles/InputsStyles";
import { FormContext } from "../Verification";




export const MySelect: FC = () => {
  const { form, setForm } = useContext(FormContext);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const [error, setError] = useState(false);
  const [ok, setOk] = useState(false);

  const rootEl = useRef<HTMLDivElement>(null);

  const optionsList = ["Мужской ", "Женский", "Ламинат", "Паркет"];

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  useEffect(() => {
    const onClick = (e: any) => {
      if (!rootEl.current!.contains(e.target)) {
        setIsOptionsOpen(false);
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);


  const handleClick = (option: string) => {
    setForm({...form, sex: option});
    setIsOptionsOpen(false);
    setOk(true);
  };


  return (
    <div ref={rootEl}>
      <label>
        Пол: <br />
        <Flex >
          <Button
            type="button"
            aria-expanded={isOptionsOpen}
            className={isOptionsOpen ? "expanded" : ""}
            onClick={toggleOptions}>
            {form.sex === "" ? "Выбери че нить" : form.sex}
            <Arrow />
          </Button>
          {ok ? <Ok/> : ""}
        </Flex>
      </label>

      <Ul
        open={isOptionsOpen}
        role="listbox"
        >
        {optionsList.map((option) => (
          <Li
            key={option}
            id={option}
            role="option"
            tabIndex={0}
            onClick={() => handleClick(option)}>
            {option}
          </Li>
        ))}
      </Ul>
      {error ? "а я?" : " "}
    </div>
  );
};



