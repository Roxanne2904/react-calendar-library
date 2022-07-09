import { DatePicker } from "../components/DatePicker/index";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { ReactDOM } from "react-dom";

export default {
  title: "UI/DatePicker",
  component: DatePicker,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  argTypes: {
    onChangeInputValue: { control: "null" },
    myInputRef: { control: "null" },
    valueCustom: { control: "null" },
    areDaysOutOfMonthAllowed: { control: "boolean" },
    areSundaysAllowed: { control: "boolean" },
    areSundaysHighlighted: { control: "boolean" },
  },
};

const Template = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});

Default.args = {
  onChangeInputValue: null,
  myInputRef: null,
  valueCustom: null,
  mode: "neutral",
  language: "en",
  areDaysOutOfMonthAllowed: false,
  areSundaysAllowed: true,
  areSundaysHighlighted: false,
};

export const RedMode = Template.bind({});

RedMode.args = {
  onChangeInputValue: null,
  myInputRef: null,
  valueCustom: null,
  mode: "red",
  language: "en",
  areDaysOutOfMonthAllowed: false,
  areSundaysAllowed: true,
  areSundaysHighlighted: false,
};

export const GreenMode = Template.bind({});

GreenMode.args = {
  onChangeInputValue: null,
  myInputRef: null,
  valueCustom: null,
  mode: "green",
  language: "en",
  areDaysOutOfMonthAllowed: false,
  areSundaysAllowed: true,
  areSundaysHighlighted: false,
};

export const PurpleMode = Template.bind({});

PurpleMode.args = {
  onChangeInputValue: null,
  myInputRef: null,
  valueCustom: null,
  mode: "purple",
  language: "en",
  areDaysOutOfMonthAllowed: false,
  areSundaysAllowed: true,
  areSundaysHighlighted: false,
};

export const YellowMode = Template.bind({});

YellowMode.args = {
  onChangeInputValue: null,
  myInputRef: null,
  valueCustom: null,
  mode: "yellow",
  language: "en",
  areDaysOutOfMonthAllowed: false,
  areSundaysAllowed: true,
  areSundaysHighlighted: false,
};

export const BlueMode = Template.bind({});

BlueMode.args = {
  onChangeInputValue: null,
  myInputRef: null,
  valueCustom: null,
  mode: "blue",
  language: "en",
  areDaysOutOfMonthAllowed: false,
  areSundaysAllowed: true,
  areSundaysHighlighted: false,
};
