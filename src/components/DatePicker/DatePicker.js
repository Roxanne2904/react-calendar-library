import React from "react";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "../../styles.css";
import {
  ChevronLeft,
  ChevronsLeft,
  ChevronRight,
  ChevronsRight,
} from "../icons/index.js";
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

export const DatePicker = ({
  onChangeInputValue,
  myInputRef,
  mode,
  language,
  valueCustom,
  areDaysOutOfMonthAllowed,
  areSundaysAllowed,
  areSundaysHighlighted,
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
        <div key={index} style={{ height: "25px" }}>
          <div style={{ margin: "1.2px" }}>
            <span
              className={`day ${
                day.dayStatus !== 0
                  ? `${
                      areDaysOutOfMonthAllowed
                        ? day.day === 0
                          ? areSundaysAllowed
                            ? areSundaysHighlighted
                              ? `sund_highli--${mode} sund_highli--${mode}--custom`
                              : `day_out--${mode} day_out--${mode}--custom`
                            : `day_out`
                          : `day_out--${mode} day_out--${mode}--custom`
                        : `day_out`
                    } `
                  : day.day === 0
                  ? areSundaysAllowed
                    ? day.timestamp === todayTimestamp
                      ? day.timestamp === dateTimestamp
                        ? `day_selected--${mode} day_selected--${mode}--custom`
                        : `currentDay--${mode} currentDay--${mode}--custom`
                      : day.timestamp === dateTimestamp
                      ? `day_selected--${mode} day_selected--${mode}--custom`
                      : areSundaysHighlighted
                      ? `sund_highli--${mode} sund_highli--${mode}--custom`
                      : `day_in--${mode} day_in--${mode}--custom`
                    : `day_out`
                  : day.timestamp === todayTimestamp
                  ? day.timestamp === dateTimestamp
                    ? `day_selected--${mode} day_selected--${mode}--custom`
                    : `currentDay--${mode} currentDay--${mode}--custom`
                  : day.timestamp === dateTimestamp
                  ? `day_selected--${mode} day_selected--${mode}--custom`
                  : `day_in--${mode} day_in--${mode}--custom`
              }`}
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
            </span>
          </div>
        </div>
      );
    });

    return (
      <div style={{ height: "23px" }}>
        <div className={`daysW daysW--${mode}`}>
          {shortenedMonth.map((elt) => {
            return (
              elt.lang === language &&
              elt.days.map((d, i) => (
                <div className={`dayW`} key={i}>
                  {d}
                </div>
              ))
            );
          })}
        </div>
        <div className={`days_container`}>{days}</div>
      </div>
    );
  };

  return (
    <div>
      <div className={`calendar`}>
        <div>
          <div className={`calendar_YM_container`}>
            <button
              className={`buttons_container buttons_container--${mode}_year buttons_container--${mode}_year--custom`}
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
                <span className={`arrows_container`}>
                  <ChevronsLeft
                    myClassName={`arrows--${mode} arrows--${mode}--custom`}
                  />
                </span>
              </div>
            </button>

            <button
              className={`buttons_container`}
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
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setMonth(month - 1);
                  if (month === 0) {
                    setMonth(11);
                  }
                }}
              >
                <span className={`arrows_container`}>
                  <ChevronLeft
                    myClassName={`arrows--${mode} arrows--${mode}--custom`}
                  />
                </span>
              </div>
            </button>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "14%",
              }}
            >
              <span
                className={`year-month_container year_container year-month_container--${mode} year-month_container--${mode}--custom`}
              >
                <span
                  className={`${
                    closeYearForm ? `close year-display ` : `open year-display`
                  }`}
                  onClick={(e) => closeTheYearForm(e)}
                  onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                      e.stopPropagation();
                      e.preventDefault();
                      !closeYearForm && setCloseYearForm(true);
                    }
                  }}
                  tabIndex={0}
                >
                  {year}
                </span>
                <label
                  className={`${closeYearForm ? `open` : `close`}`}
                  style={{ width: "100%" }}
                  onKeyDown={submitYear}
                >
                  <input
                    className={`year-input year-input--${mode} year-input--${mode}--custom`}
                    ref={yearRef}
                    type="text"
                    name="year"
                    minLength={4}
                    maxLength={4}
                    onBlur={() => setCloseYearForm(false)}
                  />
                </label>
              </span>

              <span
                className={`year-month_container year-month_container--${mode} year-month_container--${mode}--custom`}
              >
                {formatMonth(month, language)}
              </span>
            </div>

            <button
              className={`buttons_container`}
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
                <span className={`arrows_container`}>
                  <ChevronRight
                    myClassName={`arrows--${mode} arrows--${mode}--custom`}
                  />
                </span>
              </div>
            </button>

            <button
              className={`buttons_container buttons_container--${mode}_year buttons_container--${mode}_year--custom`}
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
                <span className={`arrows_container`}>
                  <ChevronsRight
                    myClassName={`arrows--${mode} arrows--${mode}--custom`}
                  />
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className={`calendar_body`}>{renderCalendar()}</div>
      </div>
    </div>
  );
};

DatePicker.propTypes = {
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
   *Choose true or false to allow interaction with days of the previous or next month.
   */
  areDaysOutOfMonthAllowed: PropTypes.bool,
  /**
   *Choose true or false to allow interaction with sundays.
   */
  areSundaysAllowed: PropTypes.bool,
  /**
   *Choose true or false to allow Sundays Highlighted.
   */
  areSundaysHighlighted: PropTypes.bool,
};

DatePicker.defaultProps = {
  onChangeInputValue: null,
  myInputRef: null,
  mode: "neutral",
  language: "en",
  valueCustom: "1",
  areDaysOutOfMonthAllowed: false,
  areSundaysAllowed: true,
  areSundaysHighlighted: false,
};
