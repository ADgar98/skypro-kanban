import {
  CalendarBlock,
  CalendarCells,
  CalendarContent,
  CalendarDayName,
  CalendarDaysNames,
  CalendarMonth,
  CalendarNav,
  CalendarP,
  CalendarPeriod,
  CalendarTtl,
  DateControl,
  NavAction,
  NavActions,
  StyledCalendar,
} from "../Calendar/StyledCalendar";

export const Calendar = ({ currentDate, setCurrentDate }) => {
  const formatMonthYear = (date) => {
    const months = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];

    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${year}`;
  };

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();

  const renderDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const days = [];
    const offset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    const prevMonthDays = getDaysInMonth(year, month - 1);
    for (let i = offset - 1; i >= 0; i--) {
      days.push(
        <div key={`prev-${i}`} className="calendar__cell _other-month">
          {prevMonthDays - i}
        </div>
      );
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dayDate = new Date(year, month, i);
      const isSelected =
        currentDate && dayDate.toDateString() === currentDate.toDateString();
      const isWeekend = [5, 6].includes(new Date(year, month, i).getDay());

      days.push(
        <div
          key={`curr-${i}`}
          className={`calendar__cell _cell-day ${isWeekend ? "_weekend" : ""} ${
            isSelected ? "_active-day" : ""
          }`}
          onClick={() => setCurrentDate(dayDate)}
        >
          {i}
        </div>
      );
    }

    const daysLeft = 42 - days.length;
    for (let i = 1; i <= daysLeft; i++) {
      days.push(
        <div key={`next-${i}`} className="calendar__cell _other-month">
          {i}
        </div>
      );
    }

    return days;
  };

  const changeMonth = (increment) => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + increment, 1)
    );
  };

  return (
    <StyledCalendar>
      <CalendarTtl>Даты</CalendarTtl>
      <CalendarBlock>
        <CalendarNav>
          <CalendarMonth>{formatMonthYear(currentDate)}</CalendarMonth>
          <NavActions>
            <NavAction onClick={() => changeMonth(-1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </NavAction>
            <NavAction onClick={() => changeMonth(1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </NavAction>
          </NavActions>
        </CalendarNav>
        <CalendarContent>
          <CalendarDaysNames>
            {["пн", "вт", "ср", "чт", "пт", "сб", "вс"].map((day) => (
              <CalendarDayName
                key={day}
                className={`calendar__day-name ${
                  day === "сб" || day === "вс" ? "-weekend-" : ""
                }`}
              >
                {day}
              </CalendarDayName>
            ))}
          </CalendarDaysNames>
          <CalendarCells>{renderDays()}</CalendarCells>
        </CalendarContent>
        <CalendarPeriod>
          {!currentDate && <CalendarP>Выберите срок исполнения.</CalendarP>}
          {currentDate && (
            <CalendarP>
              Срок исполнения:{" "}
              <DateControl>
                {currentDate?.toLocaleDateString("ru-RU")}
              </DateControl>
            </CalendarP>
          )}
        </CalendarPeriod>
      </CalendarBlock>
    </StyledCalendar>
  );
};
