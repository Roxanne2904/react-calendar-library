import React, { useEffect, useState, useRef, forwardRef } from "react";
import { ReactDOM } from "react-dom";
import "../../styles.css";
import { Calendar } from "../Calendar/Calendar";
import PropTypes from "prop-types";

export const DatePicker = ({
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
  areSundaysHighlighted,
}) => {
  let inputRef = useRef(null);
  let pattern =
    /^([+-]?\d{4}|(0[1-9]|[12][0-9]|3[01]))(\/)(0[1-9]|1[0-2])(\/)([+-]?\d{4}|(0[1-9]|[12][0-9]|3[01]))$/g;
  const [isItOpen, setIsItOpen] = useState(false);
  const [validValue, setValidValue] = useState(null);

  useEffect(() => {
    const addBackDrop = (e) => {
      document.activeElement !== inputRef.current && setIsItOpen(false);
    };
    window.addEventListener("click", addBackDrop);

    return () => window.removeEventListener("click", addBackDrop);
  }, [inputRef]);

  const handleOpeningOfDatePicker = () => {
    // if (isItOpen) {
    //   setIsItOpen(false);
    // } else {
    //   inputRef.current.focus();
    //   setIsItOpen(true);
    // }
    inputRef.current.focus();
    setIsItOpen(true);
  };

  const handleOnchange = (e) => {
    let value = e.target.value;
    let isItValidValue = pattern.test(value);

    if (isItValidValue) {
      if (validValue === null || validValue !== value) {
        if (
          value.split("/")[0].length === 2 &&
          value.split("/")[2].length === 2
        ) {
          return;
        }
        if (
          value.split("/")[0].length === 3 &&
          value.split("/")[2].length === 3
        ) {
          return;
        }
        setValidValue(value);
      }
    }
  };

  return (
    <form>
      <div>
        <label>
          <span>Date</span>

          <input
            onClick={() => handleOpeningOfDatePicker()}
            onChange={handleOnchange}
            ref={inputRef}
            type="text"
            name="date"
            pattern="([+-]?\d{4}|(0[1-9]|[12][0-9]|3[01]))(\/)(0[1-9]|1[0-2])(\/)([+-]?\d{4}|(0[1-9]|[12][0-9]|3[01]))"
          />
        </label>
        <div className={isItOpen ? "datePickerIsOpened" : "datePickerIsClosed"}>
          <Calendar
            onChangeInputValue={validValue}
            myInputRef={inputRef}
            mode={mode}
            language={language}
            valueCustom={valueCustom}
            color={color}
            colorNumbers={colorNumbers}
            colorNumberSelected={colorNumberSelected}
            colorNumbersOnHover={colorNumbersOnHover}
            numbersOutOfMonthColor={numbersOutOfMonthColor}
            numberBackgroundColorHover={numberBackgroundColorHover}
            numberBackgroundSelected={numberBackgroundSelected}
            arrowsBackgroundColor={arrowsBackgroundColor}
            areDaysOutOfMonthAllowed={areDaysOutOfMonthAllowed}
            areSundaysAllowed={areSundaysAllowed}
            areSundaysHighlighted={areSundaysHighlighted}
          />
        </div>
      </div>
    </form>
  );
};

DatePicker.propTypes = {
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
  /**
   *Choose true or false to allow Sundays Highlighted.
   */
  areSundaysHighlighted: PropTypes.bool,
};

DatePicker.defaultProps = {
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
  areDaysOutOfMonthAllowed: true,
  areSundaysAllowed: true,
  areSundaysHighlighted: false,
};
