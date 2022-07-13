import React, { useEffect, useState, useRef, forwardRef } from "react";
import { ReactDOM } from "react-dom";
import "../../styles.css";
import { DatePicker } from "../DatePicker/DatePicker";
import PropTypes from "prop-types";

export const DatePickerInSimulation = ({
  mode,
  language,
  valueCustom,
  areDaysOutOfMonthAllowed,
  areSundaysAllowed,
  areSundaysHighlighted,
}) => {
  let inputRef = useRef(null);
  let pattern =
    /^([+-]?\d{4}|(0[1-9]|[12][0-9]|3[01]))(\/)([+-]?\d{4}|(0[1-9]|[12][0-9]|3[01]))(\/)([+-]?\d{4}|(0[1-9]|[12][0-9]|3[01]))$/g;
  const [isItOpen, setIsItOpen] = useState(false);
  const [validValue, setValidValue] = useState(null);

  useEffect(() => {
    const addBackDrop = (e) => {
      document.activeElement !== inputRef.current && setIsItOpen(false);
    };
    const addBackDropOnKeyDown = (e) => {
      if (e.keyCode === 13) {
        document.activeElement !== inputRef.current && setIsItOpen(false);
      }
    };

    window.addEventListener("click", addBackDrop);
    window.addEventListener("keydown", addBackDropOnKeyDown);

    return () => {
      window.removeEventListener("click", addBackDrop);
      window.removeEventListener("keydown", addBackDropOnKeyDown);
    };
  }, [inputRef]);

  const handleOpeningOfDatePicker = () => {
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
        <div className={isItOpen ? "open" : "close"}>
          <DatePicker
            onChangeInputValue={validValue}
            myInputRef={inputRef}
            mode={mode}
            language={language}
            valueCustom={valueCustom}
            areDaysOutOfMonthAllowed={areDaysOutOfMonthAllowed}
            areSundaysAllowed={areSundaysAllowed}
            areSundaysHighlighted={areSundaysHighlighted}
          />
        </div>
      </div>
    </form>
  );
};

DatePickerInSimulation.propTypes = {
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
   *"1" : 01/02/2022 DD/MM/YYYY
   *
   *"2" : 2022/02/01 YYYY/MM/DD
   *
   *"3" : 02/01/2022 MM/DD/YYYY
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

DatePickerInSimulation.defaultProps = {
  mode: "neutral",
  language: "en",
  valueCustom: "1",
  areDaysOutOfMonthAllowed: true,
  areSundaysAllowed: true,
  areSundaysHighlighted: false,
};
