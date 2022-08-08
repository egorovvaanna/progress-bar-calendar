import { FC, useState, useRef, useEffect, useContext } from "react";
import { FormContext } from "../Verification";

import { Flex, Input, Li, Ul, Ok } from "../../../styles/InputsStyles";

export const MySearchSelect: FC = () => {
  const { form, setForm } = useContext(FormContext);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [error, setError] = useState(false);
  const [ok, setOk] = useState(false);
  const rootEl = useRef<HTMLDivElement>(null);

  const optionsList = [
    "Австралия ",
    "Армения",
    "Барбадос",
    "Бразилия",
    "Египет",
    "Корея",
    "Фиджи",
    "Франция",
    "Китай",
    "Латвия",
    "Хорватия",
  ];

  const countries = optionsList.filter((counrty) => {
    return counrty
      .toLocaleLowerCase()
      .includes(form.country.toLocaleLowerCase());
  });

  const searchCoutry = (e: string) => {
    setForm({ ...form, country: e });
    if (e === " " || e === "") {
      setError(true);
      setOk(false);
    } else {
      setError(false);
      setOk(true);
    }
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
    console.log("first");
    setForm({ ...form, country: option });
    setIsOptionsOpen(false);
    setOk(true);
  };

  return (
    <div ref={rootEl}>
      <label>
        Страна:
        <Flex>
          <Input
            value={form.country}
            onChange={(e) => searchCoutry(e.target.value)}
            placeholder="Страна"
            className={isOptionsOpen ? "expanded" : ""}
            onFocus={() => setIsOptionsOpen(true)}></Input>
          {ok ? <Ok /> : ""}
        </Flex>
      </label>

      <Ul open={isOptionsOpen}>
        {countries.map((option) => (
          <Li
            key={option}
            id={option}
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
