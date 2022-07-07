import { Calendar } from "../components/Calendar/index";
//*
import React from "react";
import { useState, useEffect, useRef } from "react";
import { ReactDOM } from "react-dom";

export default {
  title: "UI/Calendar",
  component: Calendar,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  argTypes: {
    onChangeInputValue: { control: "null" },
    myInputRef: { control: "null" },
    valueCustom: { control: "null" },
    arrowsBackgroundColor: { control: "color" },
    numberBackgroundColorHover: { control: "color" },
    numberBackgroundSelected: { control: "null" },
    numbersOutOfMonthColor: { control: "color" },
    colorNumbers: { control: "color" },
    colorNumbersOnHover: { control: "color" },
    colorNumberSelected: { control: "null" },
    color: { control: "color" },
    areDaysOutOfMonthAllowed: { control: "boolean" },
    areSundaysAllowed: { control: "boolean" },
  },
};

const Template = (args) => <Calendar {...args} />;

export const Default = Template.bind({});

Default.args = {
  onChangeInputValue: null,
  myInputRef: null,
  valueCustom: null,
  numberBackgroundSelected: null,
  colorNumberSelected: null,
  mode: "neutral",
  language: "en",
  arrowsBackgroundColor: null,
  numberBackgroundColorHover: null,
  numbersOutOfMonthColor: null,
  colorNumbers: null,
  colorNumbersOnHover: null,
  color: null,
  areDaysOutOfMonthAllowed: false,
  areSundaysAllowed: true,
};

// export const AreDaysOutOfMonthAllowed = Template.bind({});

// AreDaysOutOfMonthAllowed.args = {
//   myInputRef: null,
//   mode: "neutral",
//   circlesBackgroundColor: null,
//   numberBackgroundColorHover: null,
//   numbersOutOfMonthColor: null,
//   colorNumbers: null,
//   color: null,
//   areDaysOutOfMonthAllowed: true,
//   areSundaysAllowed: true,
// };

// export const AreDaysOutOfMonthAllowedWithNoSundays = Template.bind({});

// AreDaysOutOfMonthAllowedWithNoSundays.args = {
//   myInputRef: null,
//   mode: "neutral",
//   circlesBackgroundColor: null,
//   numberBackgroundColorHover: null,
//   numbersOutOfMonthColor: null,
//   colorNumbers: null,
//   color: null,
//   areDaysOutOfMonthAllowed: true,
//   areSundaysAllowed: false,
// };
// export const AreSundaysAllowed = Template.bind({});

// AreSundaysAllowed.args = {
//   myInputRef: null,
//   mode: "neutral",
//   circlesBackgroundColor: null,
//   numberBackgroundColorHover: null,
//   numbersOutOfMonthColor: null,
//   colorNumbers: null,
//   color: null,
//   areDaysOutOfMonthAllowed: false,
//   areSundaysAllowed: false,
// };

export const RedMode = Template.bind({});

RedMode.args = {
  onChangeInputValue: null,
  myInputRef: null,
  valueCustom: null,
  numberBackgroundSelected: null,
  colorNumberSelected: null,
  mode: "red",
  language: "en",
  arrowsBackgroundColor: null,
  numberBackgroundColorHover: null,
  numbersOutOfMonthColor: null,
  colorNumbers: null,
  colorNumbersOnHover: null,
  color: null,
  areDaysOutOfMonthAllowed: false,
  areSundaysAllowed: true,
};

export const GreenMode = Template.bind({});

GreenMode.args = {
  onChangeInputValue: null,
  myInputRef: null,
  valueCustom: null,
  numberBackgroundSelected: null,
  colorNumberSelected: null,
  mode: "green",
  language: "en",
  arrowsBackgroundColor: null,
  numberBackgroundColorHover: null,
  numbersOutOfMonthColor: null,
  colorNumbers: null,
  colorNumbersOnHover: null,
  color: null,
  areDaysOutOfMonthAllowed: false,
  areSundaysAllowed: true,
};

export const PurpleMode = Template.bind({});

PurpleMode.args = {
  onChangeInputValue: null,
  myInputRef: null,
  valueCustom: null,
  numberBackgroundSelected: null,
  colorNumberSelected: null,
  mode: "purple",
  language: "en",
  arrowsBackgroundColor: null,
  numberBackgroundColorHover: null,
  numbersOutOfMonthColor: null,
  colorNumbers: null,
  colorNumbersOnHover: null,
  color: null,
  areDaysOutOfMonthAllowed: false,
  areSundaysAllowed: true,
};

export const YellowMode = Template.bind({});

YellowMode.args = {
  onChangeInputValue: null,
  myInputRef: null,
  valueCustom: null,
  numberBackgroundSelected: null,
  colorNumberSelected: null,
  mode: "yellow",
  language: "en",
  arrowsBackgroundColor: null,
  numberBackgroundColorHover: null,
  numbersOutOfMonthColor: null,
  colorNumbers: null,
  colorNumbersOnHover: null,
  color: null,
  areDaysOutOfMonthAllowed: false,
  areSundaysAllowed: true,
};

export const BlueMode = Template.bind({});

BlueMode.args = {
  onChangeInputValue: null,
  myInputRef: null,
  valueCustom: null,
  numberBackgroundSelected: null,
  colorNumberSelected: null,
  mode: "blue",
  language: "en",
  arrowsBackgroundColor: null,
  numberBackgroundColorHover: null,
  numbersOutOfMonthColor: null,
  colorNumbers: null,
  colorNumbersOnHover: null,
  color: null,
  areDaysOutOfMonthAllowed: false,
  areSundaysAllowed: true,
};
