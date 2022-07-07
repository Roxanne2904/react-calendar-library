import React from "react";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  ChevronLeft,
  ChevronsLeft,
  ChevronRight,
  ChevronsRight,
} from "../icons/index.js";
//*Styled

import {
  modeType,
  StyledCalendarContainer,
  StyledCalendarDays,
  StyledCalendarDaysContainer,
  StyledCalendarHeader,
  StyledCalendarName,
  StyledHeaderBody,
  StyledCalendarDisplay,
  StyledYMContent,
  StyledYMButtonContainer,
  StyledYMDisplay,
  StyledYDisplay,
  StyledArrow,
  StyledCalendarBody,
  StyledYInput,
  StyledYLabel,
} from "./styled";
// import "../../styles.css";
//*Tools
import {
  todayTimestamp,
  daysMap,
  monthMap,
  getNumberOfDays,
  getDayDetails,
  getMonthDetails,
  getDateStringFromTimestamp,
  formatMonth,
  formatADateStringIntoAnObject,
  shortenedMonth,
} from "./tools_functions";

export const Calendar = ({
  onChangeInputValue,
  myInputRef,
  mode,
  language,
  valueCustom,
  arrowsBackgroundColor,
  numberBackgroundColorHover,
  numberBackgroundSelected,
  color,
  colorNumbers,
  colorNumbersOnHover,
  colorNumberSelected,
  numbersOutOfMonthColor,
  areDaysOutOfMonthAllowed,
  areSundaysAllowed,
}) => {
  let date = new Date();
  const [hover, setHover] = useState(false);
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  const [monthDetails, setMonthDetails] = useState(
    getMonthDetails(year, month)
  );
  const [selectedDay, setSelectedDay] = useState({
    timestamp: todayTimestamp,
    dayStatus: 0,
    currentMonth: null,
  });
  const [closeYearForm, setCloseYearForm] = useState(false);
  const [myInputValue, setMyInputValue] = useState();
  const [dateTimestamp, setDateTimestamp] = useState();

  const yearRef = useRef(null);

  //*Use Effect
  useEffect(() => {
    setMonthDetails(getMonthDetails(year, month));
  }, [year, month]);

  useEffect(() => {
    let dateString = getDateStringFromTimestamp(
      selectedDay,
      valueCustom,
      language
    );
    if (myInputRef === null || myInputRef === "") {
      console.log("Error! The calendar is not linked to any input");
    } else {
      if (myInputRef.current === null) {
        console.log(
          "Error! The calendar is linked to an input but they are not a valid input"
        );
      } else if (
        myInputRef.current.value !== undefined ||
        myInputRef.current.value !== null ||
        myInputRef.current.value !== ""
      ) {
        //*Display date value on input
        myInputRef.current.value = dateString;
        //*Retrieve timestamp from dateValue just displayed
        const { currentDate, currentMonth, currentYear } =
          formatADateStringIntoAnObject(dateString) !== null &&
          formatADateStringIntoAnObject(dateString);

        const updateTimestamp = new Date(
          currentYear,
          currentMonth - 1,
          currentDate
        ).getTime();

        setDateTimestamp(updateTimestamp);

        if (selectedDay.dayStatus === 1) {
          setMonth(month + 1);
          if (month === 11) {
            setMonth(0);
            setYear(year + 1);
          }
        } else if (selectedDay.dayStatus === -1) {
          setMonth(month - 1);
          if (month === 0) {
            setMonth(11);
            setYear(year - 1);
          }
        }
      } else {
        console.log("there is no value yet");
      }
    }
  }, [selectedDay]);

  useEffect(() => {
    closeYearForm && yearRef.current.focus();
  }, [closeYearForm]);

  useEffect(() => {
    if (onChangeInputValue !== null) {
      const { currentDate, currentMonth, currentYear } =
        formatADateStringIntoAnObject(onChangeInputValue) !== null &&
        formatADateStringIntoAnObject(onChangeInputValue);

      let monthAfterOnChange = currentMonth !== undefined && currentMonth - 1;

      if (monthAfterOnChange === -1) {
        monthAfterOnChange = 11;
      }

      setMonth(parseInt(monthAfterOnChange, 10));
      setYear(parseInt(currentYear, 10));

      let currentTimestamp = new Date(
        currentYear,
        currentMonth - 1,
        currentDate
      ).getTime();

      // let objectDate = new Date(currentTimestamp);
      setDateTimestamp(currentTimestamp);
      setSelectedDay({
        timestamp: currentTimestamp,
        dayStatus: 0,
        currentMonth: currentMonth - 1,
        currentDate: currentDate,
      });
    } else {
      return;
    }
  }, [onChangeInputValue]);

  const onDateClick = (day) => {
    if (myInputRef === null) {
      console.log("there is no input linked with the calendar component");
    } else {
      myInputRef.current.focus();
      setSelectedDay({
        timestamp: day.timestamp,
        dayStatus: day.dayStatus,
        currentMonth: day.currentMonth,
        currentDate: day.date,
      });
    }
  };

  const closeTheYearForm = (e) => {
    e.stopPropagation();
    !closeYearForm && setCloseYearForm(true);
  };

  const submitYear = (e) => {
    if (e.keyCode === 13 && document.activeElement === yearRef.current) {
      e.stopPropagation();
      e.preventDefault();
      let newYear = yearRef.current.value;
      if (newYear === "" || newYear === undefined) {
      } else {
        setYear(parseInt(newYear, 10));
      }

      setCloseYearForm(false);
    }
  };

  const renderCalendar = () => {
    let days = monthDetails.map((day, index) => {
      return (
        <StyledCalendarContainer key={index}>
          <StyledCalendarDaysContainer>
            <StyledCalendarDays
              validDay={day.dayStatus}
              currentDay={day.timestamp}
              sundays={day.day}
              currentMode={mode}
              currentBackground={arrowsBackgroundColor}
              currentColorNumbers={colorNumbers}
              currentColorHover={colorNumbersOnHover}
              currentColorNumberSelected={colorNumberSelected}
              currentNumbersOutOfMonthColor={numbersOutOfMonthColor}
              currentBackgroundHover={numberBackgroundColorHover}
              currentNumberBackgroundSelected={numberBackgroundSelected}
              areDaysOutOfMonthAllowed={areDaysOutOfMonthAllowed}
              areCurrentSundaysAllowed={areSundaysAllowed}
              daySelected={dateTimestamp}
              tabIndex={0}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onDateClick(day);
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  e.stopPropagation();
                  e.preventDefault();
                  onDateClick(day);
                }
              }}
            >
              {day.date}
            </StyledCalendarDays>
          </StyledCalendarDaysContainer>
        </StyledCalendarContainer>
      );
    });

    return (
      <StyledCalendarContainer>
        <StyledCalendarHeader currentMode={mode} currentColor={color}>
          {shortenedMonth.map((elt) => {
            return (
              elt.lang === language &&
              elt.days.map((d, i) => (
                <StyledCalendarName key={i}>{d}</StyledCalendarName>
              ))
            );
          })}
          {/* {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d, i) => (
            <StyledCalendarName key={i}>{d}</StyledCalendarName>
          ))} */}
        </StyledCalendarHeader>
        <StyledHeaderBody>{days}</StyledHeaderBody>
      </StyledCalendarContainer>
    );
  };

  return (
    <div>
      <StyledCalendarDisplay>
        <div>
          <StyledYMContent>
            <StyledYMButtonContainer
              isThisYear={true}
              currentMode={mode}
              currentBackground={arrowsBackgroundColor}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  e.preventDefault();
                  e.stopPropagation();
                  setYear(year - 1);
                }
              }}
            >
              <div
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setYear(year - 1);
                }}
              >
                <StyledArrow>
                  <ChevronsLeft color={color} currentMode={mode} />
                </StyledArrow>
              </div>
            </StyledYMButtonContainer>

            <StyledYMButtonContainer
              isThisYear={false}
              currentMode={mode}
              currentBackground={arrowsBackgroundColor}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  e.preventDefault();
                  e.stopPropagation();
                  setMonth(month - 1);
                  if (month === 0) {
                    setMonth(11);
                  }
                }
              }}
            >
              <div
                className="mdpchb-inner"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setMonth(month - 1);
                  if (month === 0) {
                    setMonth(11);
                  }
                }}
              >
                <StyledArrow>
                  <ChevronLeft color={color} currentMode={mode} />
                </StyledArrow>
              </div>
            </StyledYMButtonContainer>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "14%",
              }}
            >
              <StyledYMDisplay
                isThisYear={true}
                currentMode={mode}
                currentColor={color}
              >
                <StyledYDisplay
                  onClick={(e) => closeTheYearForm(e)}
                  onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                      e.stopPropagation();
                      e.preventDefault();
                      !closeYearForm && setCloseYearForm(true);
                    }
                  }}
                  isClosed={closeYearForm}
                  tabIndex={0}
                >
                  {year}
                </StyledYDisplay>
                <StyledYLabel
                  style={{ width: "100%" }}
                  isClosed={closeYearForm}
                  onKeyDown={submitYear}
                >
                  <StyledYInput
                    ref={yearRef}
                    type="text"
                    name="year"
                    minLength={4}
                    maxLength={4}
                    currentMode={mode}
                    currentColor={color}
                    onBlur={() => setCloseYearForm(false)}
                  />
                </StyledYLabel>
              </StyledYMDisplay>

              <StyledYMDisplay
                isThisYear={false}
                currentMode={mode}
                currentColor={color}
              >
                {formatMonth(month, language)}
              </StyledYMDisplay>
            </div>

            <StyledYMButtonContainer
              isThisYear={false}
              currentMode={mode}
              currentBackground={arrowsBackgroundColor}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  e.preventDefault();
                  e.stopPropagation();
                  setMonth(month + 1);
                  if (month === 11) {
                    setMonth(0);
                  }
                }
              }}
            >
              <div
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setMonth(month + 1);
                  if (month === 11) {
                    setMonth(0);
                  }
                }}
              >
                <StyledArrow>
                  <ChevronRight color={color} currentMode={mode} />
                </StyledArrow>
              </div>
            </StyledYMButtonContainer>

            <StyledYMButtonContainer
              isThisYear={true}
              currentMode={mode}
              currentBackground={arrowsBackgroundColor}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  e.preventDefault();
                  e.stopPropagation();
                  setYear(year + 1);
                }
              }}
            >
              <div
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setYear(year + 1);
                }}
              >
                <StyledArrow>
                  <ChevronsRight color={color} currentMode={mode} />
                </StyledArrow>
              </div>
            </StyledYMButtonContainer>
          </StyledYMContent>
        </div>
        <StyledCalendarBody>{renderCalendar()}</StyledCalendarBody>
      </StyledCalendarDisplay>
    </div>
  );
};

Calendar.propTypes = {
  /**
   * Must contain the input valid value to handle the on change event.
   *
   * !!You must add this prop to initialize this calendar component.
   */
  onChangeInputValue: PropTypes.string,
  /**
   * Must contain input reference in order to link this calendar to an input as a DatePicker.
   *
   * !!You must add this prop to link your component to your input. Otherwise, it will not work.
   */
  myInputRef: PropTypes.object,
  /**
   *Choose a predefined mode.
   *
   *  "neutral"/"red"/"blue"/"green"/"purple"/"yellow"/
   */
  mode: PropTypes.string,
  /**
   *Choose your current language:
   *
   * "en" /
   * "fr" /
   * "spa" /
   * "por" /
   * "ger" /
   */
  language: PropTypes.string,
  /**
   *Choose your value type:
   *
   * !If your component is not link to any input it would be useless.
   *
   *"1" : 01/02/2022
   *
   *"2" : 2022/02/01
   */
  valueCustom: PropTypes.string,
  /**
   *Customize your arrows background color in order to add or remove a year.
   */
  arrowsBackgroundColor: PropTypes.string,
  /**
   *Customize your number background color on hover.
   */
  numberBackgroundColorHover: PropTypes.string,
  /**
   *Customize your selected number background color.
   */
  numberBackgroundSelected: PropTypes.string,
  /**
   *Customize your invalid numbers color (these out of month).
   */
  numbersOutOfMonthColor: PropTypes.string,
  /**
   *Customize arrows ans date color.
   */
  color: PropTypes.string,
  /**
   *Customize numbers color.
   */
  colorNumbers: PropTypes.string,
  /**
   *Customize numbers color on hover.
   */
  colorNumbersOnHover: PropTypes.string,
  /**
   *Customize your selected number color.
   */
  colorNumberSelected: PropTypes.string,
  /**
   *Choose true or false to allow interaction with days of the previous or next month.
   */
  areDaysOutOfMonthAllowed: PropTypes.bool,
  /**
   *Choose true or false to allow interaction with sundays.
   */
  areSundaysAllowed: PropTypes.bool,
};

Calendar.defaultProps = {
  onChangeInputValue: null,
  myInputRef: null,
  mode: "neutral",
  language: "en",
  valueCustom: "1",
  color: null,
  colorNumbers: null,
  colorNumberSelected: null,
  colorNumbersOnHover: null,
  numbersOutOfMonthColor: null,
  numberBackgroundColorHover: null,
  numberBackgroundSelected: null,
  arrowsBackgroundColor: null,
  areDaysOutOfMonthAllowed: false,
  areSundaysAllowed: true,
};
