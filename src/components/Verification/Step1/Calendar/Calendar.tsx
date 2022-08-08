//@ts-check
import {
  FC,
  useState,
  useRef,
  useEffect,
  useCallback,
  useContext,
} from "react";

import { getMonthData, months, years, daysWeek, date } from "../../../../date";

import { ReactComponent as Arrow } from "./../../../../utils/arrow.svg";
import {
  CalendarContainer,
  Month,
  Flex,
  Container,
  Ul,
  Li,
  Years,
  Td,
  TdLight,
  Table,
  Th,
} from "../../../../styles/CalendarStyles";
import { ButtonWhite } from "../../../../styles/globalStyles";
import { FormContext } from "../../Verification";

export const Calendar: FC<any> = ({ visible, setVisible }) => {
  const { form, setForm } = useContext(FormContext);

  const [isMonths, setIsMonths] = useState(false);
  const [isYears, setIsYears] = useState(false);
  const [monthsList, setMonthsList] = useState<any>([]);
  const rootEl = useRef<HTMLDivElement>(null);

  const [currentMonth, setMonth] = useState(date.getMonth());
  const [currentYear, setYear] = useState(years[0]);



  const toggleMonths = () => {
    setIsMonths(!isMonths);
  };

  const toggleYears = () => {
    setIsYears(!isYears);
  };

  const changeMonth = (index: number) => {
    setMonth(index);
    const newMonth = index <= 9 ? "0" + (index + 1) : index + 1;
    setForm({ ...form, date: { ...form.date, month: newMonth } });
    setIsMonths(false);
  };

  const changeYear = (index: number) => {
    setYear(index);
    setForm({ ...form, date: { ...form.date, year: index } });
    setIsYears(false);
  };

  const changeDay = (index: number) => {
    const newDay = index <= 9 ? "0" + (index + 1) : index + 1;
    setForm({ ...form, date: { ...form.date, day: newDay } });
    setIsYears(false);
    
  };

  useEffect(() => {
    const onClick = (e: any) => {
      if (!rootEl.current!.contains(e.target)) {
        setIsMonths(false);
        setIsYears(false);
        // setVisible(false)
      }
    };

    document.addEventListener("click", onClick);

    setMonthsList(getMonthData(currentYear, currentMonth));

    return () => document.removeEventListener("click", onClick);
  }, [currentMonth, currentYear, setVisible]);

  return (
    <Container ref={rootEl} visible={visible}>
      <Flex>
        <Month>
          <ButtonWhite
            type="button"
            aria-expanded={isMonths}
            className={isMonths ? "expanded" : ""}
            onClick={toggleMonths}>
            {months[currentMonth]}
            <Arrow />
          </ButtonWhite>

          <Ul open={isMonths} role="listbox">
            {months.map((month, index) => (
              <Li
                key={month}
                id={month}
                role="option"
                tabIndex={0}
                onClick={() => changeMonth(index)}>
                {month}
              </Li>
            ))}
          </Ul>
        </Month>

        <Years>
          <ButtonWhite
            type="button"
            aria-expanded={isMonths}
            className={isMonths ? "expanded" : ""}
            onClick={toggleYears}>
            {currentYear}
            <Arrow />
          </ButtonWhite>

          <Ul open={isYears} role="listbox">
            {years.map((year) => (
              <Li
                key={year}
                role="option"
                tabIndex={0}
                onClick={() => changeYear(year)}>
                {year}
              </Li>
            ))}
          </Ul>
        </Years>
      </Flex>

      <CalendarContainer>
        <Table>
          <thead>
            <tr>
              {daysWeek.map((name) => (
                <Th key={name}>{name}</Th>
              ))}
            </tr>
          </thead>

          <tbody>
            {monthsList.map((week:any, index:any) => (
              <tr key={index} className="week">
                {week.map((date:any, index:any) =>
                  date ? (
                    <Td
                      key={index}
                      onClick={()=>changeDay(date)}
                    >
                      {date}
                    </Td>
                  ) : (
                    <TdLight key={index} />
                  )
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </CalendarContainer>
    </Container>
  );
};
